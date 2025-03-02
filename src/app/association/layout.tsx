import PageTitle from "@/components/layout/PageTitle";
import Category from "@/components/layout/Category";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"w-full flex flex-col items-center"}>
      <PageTitle title={"농구협회"} url={"/association/announcement"} />
      <Category
        category1={"공지사항"}
        category2={"회장인사말"}
        category3={"협회역사"}
        category1Url={"announcement"}
        category2Url={"greeting"}
        category3Url={"history"}
        defaultUrl={"/association/"}
      />
      {children}
    </div>
  );
}
