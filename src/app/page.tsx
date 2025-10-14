import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

export default async function Home() {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="flex h-screen items-center justify-center">
      Protected server component
      {JSON.stringify(data[0].name)}
    </div>
  );
}
