import Dashboard from "@/components/dashboard";
import Project from "@/components/Project";
const DashboarPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ userId: string }>;
  searchParams: { project?: string };
}) => {
  const project = (await searchParams).project;
  const id = (await params).userId;
  return (
    <>
      {/* <Dashboard userId={id} /> */}
      <Project />
    </>
  );
};

export default DashboarPage;
