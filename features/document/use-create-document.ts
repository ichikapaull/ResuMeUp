"use client";
import { toast } from "@/hooks/use-toast";
import { api } from "@/lib/hono-rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof api.document.create.$post>;
type RequestType = InferRequestType<typeof api.document.create.$post>["json"];

const useCreateDocument = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      console.log("🚀 Creating document with data:", json);
      const response = await api.document.create.$post({ json });
      console.log("📡 API Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error("❌ API Error response:", errorData);
        throw new Error(`API Error: ${response.status} - ${errorData}`);
      }
      
      const result = await response.json();
      console.log("✅ Parsed response:", result);
      return result;
    },
    onSuccess: (response) => {
      console.log("🎉 Document created successfully:", response);
      queryClient.invalidateQueries({ queryKey: ["documents"] });
    },
    onError: (error) => {
      console.error("💥 Document creation failed:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create document",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useCreateDocument;
