import {
  inferAdditionalFields,
  inferOrgAdditionalFields,
  organizationClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";
import { ac, admin, member, owner } from "./permission";

export const authClient = createAuthClient({
  baseURL: process.env.EXPRESS_PUBLIC_API_URL,
  plugins: [
    inferAdditionalFields<typeof auth>(),
    organizationClient({
      ac,
      roles: {
        admin,
        member,
        owner,
      },
      schema: inferOrgAdditionalFields<typeof auth>()
    }),
  ],
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
