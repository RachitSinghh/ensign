import { useMutation } from "@tanstack/react-query";
import { api, type LeadInput } from "@shared/routes";
import { apiRequest } from "@/lib/queryClient";

export function useCreateLead() {
  return useMutation({
    mutationFn: async (data: LeadInput) => {
      // Send the validated data to the backend endpoint using the generated API paths
      const res = await apiRequest(api.leads.create.method, api.leads.create.path, data);
      
      // Parse successful response according to schema
      return api.leads.create.responses[201].parse(await res.json());
    },
  });
}
