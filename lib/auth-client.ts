import { inferAdditionalFields, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.EXPRESS_PUBLIC_API_URL,
  plugins: [inferAdditionalFields<typeof auth>(), organizationClient()],
});

export const {
  signUp,
  signIn,
  signOut,
  getSession,
  useSession,
  resetPassword,
  sendVerificationEmail,
  requestPasswordReset,
} = authClient;
