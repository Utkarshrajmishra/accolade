import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Logs, Menu, Search, Star } from "lucide-react";

type Feedback = {
  id: string;
  name: string;
  email: string;
  date: string;
  feedback: string;
  status: string;
  rating: number;
};

export function DataTable({ feedback }: { feedback?: Feedback[] }) {
  return (
    <>
      <div className="flex text-sm justify-end">
        {/* <div className="p-2 rounded bg-neutral-900/30 border-1 border border-neutral-800">
          <code>
            {`<my-widget projectId="cm83v11jq0002mlqysypmefai"></my-widget>`} <br/>
            {` <script src="widget.umd.js"></script>`}
          </code>
        </div> */}
      </div>
      <div className="flex mt-2 justify-between items-center">
        {" "}
        <div className="relative mb-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by email"
            className="w-[360px] bg-zinc-900/30 border border-zinc-800/30 rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700"
          />
        </div>
        <div>
          <Logs />
        </div>
      </div>

      <div className="rounded bg-zinc-900/30 border-zinc-800 border shadow-sm overflow-hidden">
        <Table className="border-zinc-800 [&_tr>td]:border-r-zinc-800 [&_tr>td:last-child]:border-r-0 [&_tr>th]:border-r-zinc-800 [&_tr>th:last-child]:border-r-0 [&_tr]:border-b-zinc-800">
          <TableHeader className="bg-zinc-800/20">
            <TableRow className="py-1.5 hover:bg-zinc-800/30 transition-colors">
              <TableHead className="font-medium text-muted-foreground">
                Name
              </TableHead>
              <TableHead className="font-medium text-muted-foreground">
                Email
              </TableHead>
              <TableHead className="font-medium text-muted-foreground">
                Date
              </TableHead>
              <TableHead className="font-medium text-muted-foreground">
                Feedback
              </TableHead>
              <TableHead className="text-right font-medium text-muted-foreground">
                Rating
              </TableHead>
            </TableRow>
          </TableHeader>
          {feedback && (
            <TableBody>
              {feedback.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-zinc-800/20 transition-colors h-8"
                >
                  <TableCell className="py-1.5 font-medium">
                    {item.name}
                  </TableCell>
                  <TableCell className="py-1.5">
                    {item.email === "anonymous@example.com" ? "NA" : item.email}
                  </TableCell>
                  <TableCell className="py-1.5 font-medium">
                    {formatDate(item.date)}
                  </TableCell>
                  <TableCell
                    className="py-1.5 max-w-[300px] truncate"
                    title={item.feedback}
                  >
                    {item.feedback}
                  </TableCell>
                  <TableCell className="py-1.5 text-right">
                    <div className="flex items-center justify-end gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          size={16}
                          className={`${
                            index < item.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-zinc-600 text-zinc-600"
                          } transition-colors`}
                        />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
}

// Helper function to format dates nicely
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch (e) {
    return dateString;
  }
}
