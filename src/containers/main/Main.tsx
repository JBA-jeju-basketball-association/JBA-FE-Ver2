import Banner from "@/containers/main/Banner";
import ShortCuts from "@/containers/main/ShortCuts";
import Gallery from "@/containers/main/Gallery";
import Footer from "@/containers/main/Footer";
import Video from "@/containers/main/Video";

const Main = () => {
  return (
    <div className="w-full -mt-12 sm:-mt-16 mb-5 flex flex-col items-center">
      <Banner />
      <ShortCuts />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
};

export default Main;
