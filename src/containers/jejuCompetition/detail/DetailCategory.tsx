import React from "react";
import confirmAlert from "@/libs/alert/ConfirmAlert";
import { competitionResult } from "@/types/CompetitionType";

type Props = {
  selectInfo: boolean;
  setSelectInfo: (value: ((prevState: boolean) => boolean) | boolean) => void;
  phase: string;
  resultData: competitionResult[];
};
const DetailCategory = ({
  selectInfo,
  setSelectInfo,
  phase,
  resultData,
}: Props) => {
  let resultCount: number = 0;
  resultData.forEach((result) => {
    resultCount += result.getResultResponseRows.length;
  });
  return (
    <div
      className={
        "grid grid-cols-2 shadow-xl rounded-[8px] bg-[rgba(245,245,245,0.1)] border border-solid border-borderColor " +
        "w-[280px] sm:w-[400px] md:w-[800px] " +
        "h-[30px] sm:h-[40px] md:h-[50px] " +
        "text-[12px] sm:text-[14px] md:text-[20px] " +
        "my-[10px] md:my[20px] "
      }
    >
      <button
        className={selectInfo ? "rounded-[8px] bg-black text-white" : ""}
        onClick={() => setSelectInfo(true)}
      >
        대회개요
      </button>
      <button
        className={selectInfo ? "" : "rounded-[8px] bg-black text-white"}
        onClick={() => {
          if (phase === "INFO" || resultCount === 0) {
            confirmAlert(
              "error",
              "대회일정 없음",
              "대회일정이 아직 등록되지 않았습니다.",
            );
            setSelectInfo(true);
          } else {
            setSelectInfo(false);
          }
        }}
      >
        {phase === "FINISH" ? "대회결과" : "대회일정"}
      </button>
    </div>
  );
};

export default DetailCategory;
