"use client";
import { Button } from "@/components/ui/button";
// import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(trpc.testAi.mutationOptions());

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.getWorkflows.queryOptions());
      },
      onError: () => {
        toast.error("Something went wrong");
      },
    })
  );

  return (
    <div className="flex h-screen gap-5 items-center justify-center flex-col ">
      Protected server component
      <Image
        src="/logos/node-flow.svg"
        className="mb-5"
        alt="Nodeflow"
        width={50}
        height={50}
      />
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <Button onClick={() => testAi.mutate()} disabled={testAi.isPending}>
        Test AI
      </Button>
      <Button onClick={() => create.mutate()} disabled={create.isPending}>
        Create Workflow
      </Button>
    </div>
  );
}
