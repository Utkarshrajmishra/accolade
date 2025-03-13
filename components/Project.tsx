import { Search } from "lucide-react";
import { DataTable } from "./Table";

const fetchProject = async (projectId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/db/getFeedback?projectId=${projectId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) {
      console.log("Some error occured");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const Project = async ({ projectId }: { projectId: string | undefined }) => {
  const feedback = await fetchProject(projectId);
  console.log(feedback);
  return (
    <div className="bg-neutral-950 font-inter  w-full  flex flex-col ">
      <div className="mt-2"></div>
      {feedback && <DataTable feedback={feedback} />}
    </div>
  );
};

export default Project;
