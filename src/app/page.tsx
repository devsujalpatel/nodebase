import { requireAuth } from "@/lib/auth-utils";

export default async function Home() {
  await requireAuth();
  return (
    <div className="flex h-screen items-center justify-center">
      Protected server component
    </div>
  );
}
