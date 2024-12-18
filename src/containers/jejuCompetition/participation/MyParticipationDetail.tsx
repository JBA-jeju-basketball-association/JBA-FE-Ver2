"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  FetchDeleteMyParticipation,
  FetchGetParticipation,
} from "@/services/participationApi";
import PostTitle from "@/components/common/PostTitle";
import CompetitionLabel from "@/components/competition/CompetitionLabel";
import GetFileBox from "@/components/common/GetFileBox";
import CancelBtn from "@/components/common/CancelBtn";
import { useRouter } from "next/navigation";
import AddBtn from "@/components/common/AddBtn";
import confirmAndCancelAlertWithLoading from "@/libs/alert/ConfirmAndCancelAlertWithLoading";
import { getFileType } from "@/types/CommonType";
import { calculatorParticipationDuration } from "@/utils/calculatorCompetitionStatus";

const MyParticipationDetail = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = useQuery({
    queryKey: ["myParticipationDetail", id],
    queryFn: async () => await FetchGetParticipation(id),
    select: (result) => result?.data.data,
  });
  const deleteHandler = async () => {
    await confirmAndCancelAlertWithLoading(
      "question",
      "신청 취소",
      "정말로 신청을 취소하시겠습니까?",
    ).then(async (res) => {
      if (res.isConfirmed) {
        await FetchDeleteMyParticipation(id, router, queryClient);
      }
    });
  };
  console.log(data);

  return (
    <div className={"w-[90%] md:w-[800px] text-sm md:text-lg"}>
      <div className={"my-5"}>
        <PostTitle title={data?.competitionName} />
      </div>
      <div className={"px-2.5 bg-white rounded-lg shadow-2xl"}>
        <div
          className={
            "flex flex-col gap-2.5 border-[#D9D9D9] border-solid border-b-[1px] py-2.5"
          }
        >
          <CompetitionLabel
            content={"종별"}
            color={"#4B4B4B"}
            bold={true}
            long={true}
          />
          <p className={"pl-1 md:pl-2"}>{data?.divisionName}</p>
        </div>
        <div
          className={
            "flex flex-col gap-2.5 border-[#D9D9D9] border-solid border-b-[1px] py-2.5"
          }
        >
          <CompetitionLabel
            content={"이름"}
            color={"#4B4B4B"}
            bold={true}
            long={true}
          />
          <p className={"pl-1 md:pl-2"}>{data?.name}</p>
        </div>
        <div
          className={
            "flex flex-col gap-2.5 border-[#D9D9D9] border-solid border-b-[1px] py-2.5"
          }
        >
          <CompetitionLabel
            content={"신청일"}
            color={"#4B4B4B"}
            bold={true}
            long={true}
          />
          <p className={"pl-1 md:pl-2"}>
            {data?.applicantDate?.replace("T", " ").substring(0, 16)}
          </p>
        </div>
        <div
          className={
            "flex flex-col gap-2.5 border-[#D9D9D9] border-solid border-b-[1px] py-2.5"
          }
        >
          <CompetitionLabel
            content={"휴대폰 번호"}
            color={"#4B4B4B"}
            bold={true}
            long={true}
          />
          <p className={"pl-1 md:pl-2"}>{data?.phoneNum}</p>
        </div>
        <div className={"flex flex-col gap-2.5 py-2.5"}>
          <CompetitionLabel
            content={"이메일"}
            color={"#4B4B4B"}
            bold={true}
            long={true}
          />
          <p className={"pl-1 md:pl-2"}>{data?.email}</p>
        </div>
      </div>
      <div className={"my-2.5"}>
        {data?.files.map((file: getFileType, i: number) => {
          return (
            <GetFileBox
              fileName={file.fileName}
              fileUrl={file.fileUrl}
              key={`my-participation-detail-${i}`}
            />
          );
        })}
      </div>
      {data &&
        (calculatorParticipationDuration(
          data.participationStartDate,
          data.participationEndDate,
        ) ? (
          <div className={"grid grid-cols-2 gap-4 mt-4"}>
            <CancelBtn
              handler={() =>
                router.push(
                  `/competition-participation/update/${data.participationCompetitionId}`,
                )
              }
              text={"수정"}
            />
            <AddBtn handler={() => deleteHandler()} text={"신청 취소"} />
          </div>
        ) : (
          <div className={"mt-4"}>
            <AddBtn handler={() => router.back()} text={"뒤로가기"} />
          </div>
        ))}
    </div>
  );
};

export default MyParticipationDetail;
