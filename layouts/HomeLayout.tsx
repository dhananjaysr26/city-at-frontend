import type { FC } from "react";
import NavBar from "@/components/common/NavBar";
import { navItems } from "@/utils/constants";
import Footer from "@/components/common/Footer";

interface Props {
  className?: string;
  children: React.ReactNode;
}
const HomeLayout: FC<Props> = ({ className, children }) => (
  <div className={className}>
    <NavBar navItems={navItems} />
    <main className="w-full">
      <div className="h-[calc(100vh-150px)] bg-[#FFFEDA] w-full"></div>
      {children}
    </main>
    <Footer />
  </div>
);

export default HomeLayout;
