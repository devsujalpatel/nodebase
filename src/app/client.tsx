"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          {user.email}, {user.name}
        </p>
      ))}
    </div>
  );
};
