import React from "react";
import { FetchMainVideoList } from "@/services/videoApi";
import VideoListCard from "@/containers/video/VideoListCard";
import { GetVideoType } from "@/types/videoType";
import AreaTitleAndAllContentBtn from "@/containers/main/AreaTitleAndAllContentBtn";

const Video = async () => {
  const data = await FetchMainVideoList();

  return (
    <div
      className={
        "flex flex-col items-center w-[90%] sm:w-[80%] md:w-[70%] mt-[50px] md:mt-[80px]"
      }
    >
      <AreaTitleAndAllContentBtn title={"대회영상"} url={"/media/video"} />
      {data?.data?.content.map((video: GetVideoType, index: number) => {
        return (
          <VideoListCard data={video} key={index + "key" + video.videoId} />
        );
      })}
    </div>
  );
};

export default Video;
