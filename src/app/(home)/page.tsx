import Footer from "@/components/layout/Footer";
import Game from "@/components/layout/Game";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Loader from "@/components/ui/Loader";
import { Suspense } from "react";
export const dynamic = "force-dynamic";
export const fetchCache = 'force-no-store';

const Home = async ({ searchParams }: any) => {
  const response = await searchParams
  return (
    <Suspense fallback={<Loader />}>
      <section className="relative w-full h-full overflow-hidden">
        <video
          src={"/assets/video/bg.mp4"}
          autoPlay
          loop
          muted
          playsInline
          className="z-[-20] object-cover object-center top-0 left-0 absolute h-full w-full"
        />
        <Sidebar />
        <div className="flex  flex-col h-full w-full justify-between">
          <Header />
          <Game category={response?.category}/>
          <Footer />
        </div>
      </section>
    </Suspense>
  );
};

export default Home;