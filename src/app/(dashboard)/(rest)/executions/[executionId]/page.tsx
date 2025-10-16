import { requireAuth } from "@/lib/auth-utils";

interface PageProps {
  params: Promise<{
    executionId: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  await requireAuth();
  const { executionId } = await params;
  return (
    <div>
      <h1>Executions id:{executionId} </h1>
    </div>
  );
};

export default Page;
