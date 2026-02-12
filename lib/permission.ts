import { createAccessControl } from "better-auth/plugins/access";

const statement = {
  organization: ["create", "read", "share", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

const member = ac.newRole({
  organization: ["create"],
});

const admin = ac.newRole({
  organization: ["create", "update"],
});

const owner = ac.newRole({
  organization: ["create", "update", "delete"],
});

export { statement, ac, member, admin, owner };
