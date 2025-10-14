import { RegisterForm } from "@/app/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";
import React from "react";

const Page = async() => {
  await requireUnauth();
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Page;
