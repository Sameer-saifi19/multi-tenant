import { CreateOrganizationDialog } from "@/components/forms/create-workspace-dialog";
import { WorkspaceCard } from "@/components/global/workspace-card";
import { getAllOrganization } from "@/server/organization";

export default async function Page() {
  const organizations = await getAllOrganization();
  return (
    <div className="flex flex-col mt-4 items-center justify-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-semibold">Workspaces</h1>
        <CreateOrganizationDialog />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 mt-8 w-full">
        {organizations.data?.map((item) => (
          <WorkspaceCard
            orgSlug={organizations.data[0].slug}
            key={item.id}
            name={item.name}
            description={item.description ?? "No description"}
            createdAt={item.createdAt}
          />
        ))}
      </div>
    </div>
  );
}
