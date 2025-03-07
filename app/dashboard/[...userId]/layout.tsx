import Sidebar from "./@sidebar/page";
import Header from "./@header/page";
import { Providers } from "@/components/SessionProvider";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Providers>
        <Sidebar />
      </Providers>
      <div className="flex-1">
        <Providers>
          <Header />
        </Providers>
        {children}
      </div>
    </div>
  );
}
