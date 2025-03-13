import Dashboard from "@/components/dashboard";
import Project from "@/components/Project";
const DashboarPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ userId: string }>;
  searchParams: { projectId?: string };
}) => {
  const projectId = (await searchParams).projectId;
  console.log("project id"+projectId)
  const id = (await params).userId;
  return (
    <>
      <Dashboard userId={id} />
      {/* <Project projectId={projectId}/> */}
    </>
  );
};

export default DashboarPage;
