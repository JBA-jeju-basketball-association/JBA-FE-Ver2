"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getGalleryList } from "@/services/GalleryApi";
import SearchBar from "@/components/common/SearchBar";
import { useObserver } from "@/hooks/useObserver";
import LoadingText from "@/components/common/LoadingText";
import { paginationResponse, paginationType } from "@/types/CommonType";
import { getGallery } from "@/types/GalleryType";
import GalleryCard from "@/containers/gallery/GalleryCard";

const GalleryList = () => {
  const bottom = useRef(null);
  const [keyword, setKeyword] = useState<string>("");
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["getGalleryList", keyword],
      queryFn: getGalleryList,
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages, lastPageParam) => {
        if (lastPage?.data.totalPages === lastPageParam + 1) {
          // lastPage 가 마지막 페이지였다면 api 호출을 하지 않는다.
          return undefined;
        } else {
          return lastPageParam + 1; // 다음 페이지 리턴
        }
      },
    });
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();

  useObserver({
    target: bottom,
    onIntersect,
    threshold: 0.1,
  });

  // 스크롤이 없을때 자동으로 다음 페이지 호출하는 로직
  useEffect(() => {
    if (status === "success" && data?.pages[0].data.totalGalleries > 0) {
      const contentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      if (contentHeight <= windowHeight && hasNextPage) {
        fetchNextPage();
      }
    }
  }, [status, data, hasNextPage, fetchNextPage]);

  useEffect(() => {
    if (scrollY !== 0) window.scrollTo(0, scrollY);
  }, []);
  return (
    <div className={"w-[280px] sm:w-[400px] md:w-[800px]"}>
      <SearchBar searchKey={keyword} setSearchKey={setKeyword} />
      <LoadingText
        loading={status === "error"}
        text={"에러발생! 관리자에게 문의해주세요."}
      />
      <LoadingText
        loading={status === "pending"}
        text={"잠시만 기다려주세요."}
      />
      {data?.pages[0].data.totalGalleries === 0 && (
        <p
          className={
            "text-red-500 mt-[20px] text-[12px] sm:text-[14px] md:text-[20px]"
          }
        >
          대회가 없습니다.
        </p>
      )}
      <div className={"grid grid-cols-2 gap-[10px] md:gap-[20px] mt-[30px]"}>
        {status === "success" &&
          data?.pages.map((group: paginationResponse) => {
            return group?.data.galleries.map((gallery: getGallery) => {
              return <GalleryCard key={gallery.galleryId} data={gallery} />;
            });
          })}
      </div>

      <div ref={bottom} />
      <LoadingText loading={isFetchingNextPage} text={"잠시만 기다려주세요."} />
    </div>
  );
};

export default GalleryList;