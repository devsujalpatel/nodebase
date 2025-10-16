"use client";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { useSuspenseWorkflows } from "../hooks/use-workflows";

export const WorkflowsList = () => {
  const workflows = useSuspenseWorkflows();
  return (
    <div className="flex flex-1 justify-center items-center">
      <p>{JSON.stringify(workflows.data, null, 2)}</p>
    </div>
  );
};

export const WorkflowsHeader = ({ disabled }: { disabled?: boolean }) => {
  return (
    <>
      <EntityHeader
        title="Workflows"
        description="Create and manage your workflows"
        onNew={() => {}}
        newButtonLabel="New Workflow"
        disabled={disabled}
        isCreating={false}
      />
    </>
  );
};

export const WorkflowsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkflowsHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
