"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Copy,
  Download,
  ExternalLink,
  LogInIcon as Logs,
  Search,
  Star,
} from "lucide-react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      '<my-widget projectId="cm83v11jq0002mlqysypmefai"></my-widget>\n<script src="widget.umd.js"></script>'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredFeedback = feedback?.filter((item) =>
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="border-none bg-neutral-950 ">
      <CardHeader className="border-b border-zinc-800 bg-neutral-950/30 py-2">
        <div className="flex items-center justify-between">
          <CardTitle className="font-semibold text-zinc-100 text-[0.98rem]">
            Algochunk's Feedback
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 h-8"
          >
            <ExternalLink size={14} />
            Documentation
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs defaultValue="embed" className="mb-6">
          <TabsContent value="embed" className="mt-0">
            <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/80 p-4">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 h-8 w-8 rounded-md border border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
                onClick={copyToClipboard}
              >
                <Copy size={14} />
                <span className="sr-only">Copy code</span>
              </Button>
              <pre className="font-mono text-sm text-zinc-300">
                <code>
                  {
                    '<my-widget projectId="cm83v11jq0002mlqysypmefai"></my-widget>'
                  }
                  <br />
                  {'<script src="widget.umd.js"></script>'}
                </code>
              </pre>
              {copied && (
                <div className="absolute -top-2 right-2 rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-300">
                  Copied!
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-4 flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[360px] rounded-lg border border-zinc-800 bg-zinc-900/50 py-2 pl-9 pr-3 text-sm text-zinc-300 placeholder:text-zinc-500 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
            />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
          >
            <Download size={14} />
            Export CSV
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 shadow-sm">
          <Table className="[&_tr>td]:border-r-zinc-800 [&_tr>td:last-child]:border-r-0 [&_tr>th]:border-r-zinc-800 [&_tr>th:last-child]:border-r-0 [&_tr]:border-b-zinc-800">
            <TableHeader className="bg-zinc-800/40">
              <TableRow className="hover:bg-zinc-800/50 transition-colors">
                <TableHead className="py-3 font-medium text-zinc-300">
                  Name
                </TableHead>
                <TableHead className="py-3 font-medium text-zinc-300">
                  Email
                </TableHead>
                <TableHead className="py-3 font-medium text-zinc-300">
                  Date
                </TableHead>
                <TableHead className="py-3 font-medium text-zinc-300">
                  Feedback
                </TableHead>
                <TableHead className="py-3 text-right font-medium text-zinc-300">
                  Rating
                </TableHead>
              </TableRow>
            </TableHeader>
            {filteredFeedback && (
              <TableBody>
                {filteredFeedback.map((item) => (
                  <TableRow
                    key={item.id}
                    className="group h-14 hover:bg-zinc-800/30 transition-colors"
                  >
                    <TableCell className="py-3 font-medium text-zinc-200">
                      {item.name}
                    </TableCell>
                    <TableCell className="py-3 text-zinc-300">
                      {item.email === "anonymous@example.com" ? (
                        <Badge
                          variant="outline"
                          className="border-zinc-700 bg-zinc-800/50 text-zinc-400"
                        >
                          Anonymous
                        </Badge>
                      ) : (
                        item.email
                      )}
                    </TableCell>
                    <TableCell className="py-3 font-medium text-zinc-300">
                      {formatDate(item.date)}
                    </TableCell>
                    <TableCell
                      className="max-w-[300px] py-3 text-zinc-300"
                      title={item.feedback}
                    >
                      <div className="line-clamp-1 group-hover:line-clamp-2 transition-all duration-300">
                        {item.feedback}
                      </div>
                    </TableCell>
                    <TableCell className="py-3 text-right">
                      <div className="flex items-center justify-end gap-0.5">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className={`${
                              index < item.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-zinc-800 text-zinc-700"
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
      </CardContent>
    </Card>
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
