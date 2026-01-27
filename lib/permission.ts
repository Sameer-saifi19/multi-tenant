import { createAccessControl } from "better-auth/plugins/access";

const statement = {
  projects: ["create", "read", "share", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

const member = ac.newRole({
  projects: ["create"],
});

const admin = ac.newRole({
  projects: ["create", "update"],
});

const owner = ac.newRole({
  projects: ["create", "update", "delete"],
});

export { statement, ac, member, admin, owner };
