import { NextApiRequest, NextApiResponse } from "next";
import { Session, unstable_getServerSession } from "next-auth";
import { getCsrfToken } from "next-auth/react";
import { SiweMessage } from "siwe";
import CredentialsProvider from "next-auth/providers/credentials";
import { IncomingMessage } from "http";
import { JWT } from "next-auth/jwt";

const ethereumProvider = CredentialsProvider({
  name: "Ethereum",
  credentials: {
    message: {
      label: "Message",
      type: "text",
      placeholder: "0x0",
    },
    signature: {
      label: "Signature",
      type: "text",
      placeholder: "0x0",
    },
  },
  async authorize(credentials, req) {
    try {
      const siwe = new SiweMessage(JSON.parse(credentials?.message || "{}"));

      const nextAuthUrl =
        process.env.NEXTAUTH_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);
      if (!nextAuthUrl) {
        return null;
      }

      const nextAuthHost = new URL(nextAuthUrl).host;
      if (siwe.domain !== nextAuthHost) {
        return null;
      }

      if (
        siwe.nonce !== (await getCsrfToken({ req: req as IncomingMessage }))
      ) {
        return null;
      }

      await siwe.validate(credentials?.signature || "");
      return { id: siwe.address };
    } catch (e) {
      return null;
    }
  },
});

export const authOptions = {
  providers: [ethereumProvider],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      return {
        ...session,
        address: token.sub,
      };
    },
  },
};

export function withAuth(
  next: (
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
  ) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(403).json({ error: "Unauthorized" });

    await next(req, res, session);
  };
}
