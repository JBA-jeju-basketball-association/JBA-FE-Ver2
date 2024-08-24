import { getGalleryDetail } from "@/services/GalleryApi";
import PostTitle from "@/components/common/PostTitle";
import GalleryDetailCard from "@/containers/gallery/GalleryDetailCard";

const GalleryDetail = async ({ id }: { id: string }) => {
  const data = await getGalleryDetail(id);
  return (
    <div className={"my-[10px] md:my-[20px]"}>
      <PostTitle title={data?.data.title} />
      <div
        className={
          "grid grid-cols-2 gap-[10px] md:gap-[20px] " +
          "mt-[30px] sm:mt-[40px] md:mt-[50px]"
        }
      >
        {data?.data.files.map((photo) => {
          return <GalleryDetailCard key={photo.fileId} data={photo} />;
        })}
      </div>
    </div>
  );
};

export default GalleryDetail;