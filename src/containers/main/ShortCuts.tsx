"use client";
import ShortCutCard from "@/containers/main/ShortCutCard";

const ShortCuts = () => {
  return (
    <div
      className={
        "flex flex-col w-[90%] sm:w-[80%] md:w-[70%] mx-auto -mt-20 sm:-mt-12 md:-mt-6"
      }
    >
      <div>
        <h3
          className={"text-base sm:text-xl md:text-3xl font-bold ml-2.5 mb-2.5"}
        >
          바로가기
        </h3>
      </div>
      <div
        className={
          "flex flex-col justify-between h-[240px] sm:h-[300px] md:h-[500px]"
        }
      >
        <div className={"flex justify-between"}>
          <ShortCutCard
            title="공지사항"
            icon="/svg/mainPage/announcement.svg"
            alt="공지사항 이미지"
            content="안내, 개최, 합격자 발표 등의 정보를 만나볼 수 있습니다."
            backgroundImageUrl="/image/mainPage/announcement.jpg"
            navUrl="/association/announcement"
          />
          <ShortCutCard
            title="대회정보"
            icon="/svg/mainPage/competition.svg"
            alt="대회정보 이미지"
            content="대회 현황, 종별, 기간 등의 정보를 만나볼 수 있습니다."
            backgroundImageUrl="/image/mainPage/competition.jpeg"
            navUrl="/jeju-competition/info"
          />
        </div>
        <div className={"flex justify-between"}>
          <ShortCutCard
            title="자료실"
            icon="/svg/mainPage/library.svg"
            alt="자료실 이미지"
            content="협회 또는 농구와 관련된 자료를 만나볼 수 있습니다."
            backgroundImageUrl="/image/mainPage/library.jpeg"
            navUrl="/community/library"
          />
          <ShortCutCard
            title="FAQ"
            icon="/svg/mainPage/faq.svg"
            alt="FAQ 이미지"
            content="자주 묻곤하는 사항들에 대한 답변을 만나볼 수 있습니다."
            backgroundImageUrl="/image/mainPage/faq.jpeg"
            navUrl="/community/faq"
          />
        </div>
      </div>
    </div>
  );
};

export default ShortCuts;
