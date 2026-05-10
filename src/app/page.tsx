import LeftSidebar from "@/components/layout/LeftSidebar";
import MainContent from "@/components/layout/MainContent";
import RightSidebar from "@/components/layout/RightSidebar";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100">

      <LeftSidebar />

      <MainContent />

      <RightSidebar />

    </div>
  );
}