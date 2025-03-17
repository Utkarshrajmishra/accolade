import { Button } from "./ui/button";

const Script = () => {
  return (
    <section className=" border border-1 font-inter border-neutral-300 rounded-xl p-4 shadow-lg bg-white">
      <p className="text-xl tracking-wide text-neutral-800 font-[500]">
        Install accolade on your website
      </p>
      <p className="text-zinc-500   mt-1 ">
        It takes 1-3 mintues to complete. Add our script to your websites head section to start getting insights
        within your dashboard, refresh this page when your're done.
      </p>
      <div className="mt-1 flex justify-end p-2 gap-3">
        <Button className="text-neutral-800 border-1 border border-neutral-800 bg-white h-9">
          Refresh
        </Button>

        <Button className="bg-gradient-to-r from-neutral-800 to-neutral-600 border-1 border border-neutral-800 h-9">
          Install
        </Button>
      </div>
    </section>
  );
};

export default Script;
