import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { erc721ABI, useContractRead } from "wagmi";

export default function useTokenGated(
  addressOrName: string,
  required: boolean = false
) {
  const router = useRouter();
  const { status: sessionStatus, data: sessionData } = useSession();
  const address = sessionData ? (sessionData.address as string) : undefined;
  const isAuthenticated = sessionStatus === "authenticated";
  const isLoading = sessionStatus === "loading" || false;
  const hasToken = sessionData ? true : false;
  console.log('🚀 ~ file: useTokenGated.tsx:16 ~ hasToken', hasToken)

  useEffect(() => {
    if (required && router.isReady && !isLoading && !hasToken) {
      const redirect = encodeURIComponent(router.asPath);
      router.push(`/signin?redirect=${redirect}`);
    }
  }, [required, router, isLoading, hasToken]);

  return { isAuthenticated, isLoading, hasToken };
}
