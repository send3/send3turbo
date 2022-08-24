import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Proposal } from "@prisma/client";

export function useProposals() {
  const { data: proposals, isLoading } = useQuery(["proposals"], async () => {
    const response = await axios.get<Proposal[]>("/api/proposals");
    return response.data;
  });

  return { proposals, isLoading };
}

export function useCreateProposal() {
  const queryClient = useQueryClient();
  const { mutate: createProposal, isLoading } = useMutation(
    async (proposal: Proposal) => {
      const result = await axios.post("/api/proposals", proposal);
      return result.data;
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(["proposals"]);
      },
    }
  );

  return { createProposal, isLoading };
}
