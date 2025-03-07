import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="h-[100%] w-full flex items-center justify-center animate-spin">
      <Loader />
    </div>
  );
};

export default Loading;
