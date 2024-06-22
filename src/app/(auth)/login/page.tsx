import { LoginMain } from "@/app/components";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <ClerkProvider>
      <SignedOut>
        <LoginMain />
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </ClerkProvider>
  );
};

export default LoginPage;
