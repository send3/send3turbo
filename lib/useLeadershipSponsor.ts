import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LeadershipSponsor } from "@prisma/client";

export function useLeadershipSponsor() {
  const { data: leadershipSponsors, isLoading } = useQuery(
    ["leadershipSponsor"],
    async () => {
      const response = await axios.get<LeadershipSponsor[]>(
        "/api/leadershipSponsor"
      );
      return response.data;
    }
  );
  return { leadershipSponsors, isLoading };
}
