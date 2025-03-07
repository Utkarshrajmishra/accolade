import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center animate-spin">
      <Loader />
    </div>
  );
};

export default Loading;
