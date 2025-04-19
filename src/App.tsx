import { useEffect, useState } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
import InfoGraphic from "./components/InfoGraphic";
import Education from "./components/Education";
import Experience from "./components/Experience";
import personIcon from "/person-svgrepo-com.svg";
import eduIcon from "/education-svgrepo-com.svg";
import comIcon from "/company-svgrepo-com.svg";

export interface IBasic {
  fullname: string;
  email: string;
  phone: string;
  personal_site?: string;
  job_title: string;
}

export interface IEducation {
  id: string;
  uni_name: string;
  degree: string;
  graduation_month_year: string;
  address: string;
}

export interface IExperience {
  id: string;
  company_name: string;
  position_title: string;
  responsibilities: string[];
  from: string;
  to: string;
}
interface IPanel {
  basic: boolean;
  education: boolean;
  exprience: boolean;
}

function App() {
  const [showPanel, setShowPanel] = useState<IPanel>({
    basic: true,
    education: false,
    exprience: false,
  });
  const [basicInfo, setBasicInfo] = useState<IBasic>({
    fullname: "John Doe",
    email: "johndoe@1234.com",
    phone: "23-123-123",
    personal_site: "www.johndoe.co",
    job_title: "Web Developer",
  });
  const [education, setEducation] = useState<Array<IEducation>>([
    {
      id: crypto.randomUUID(),
      uni_name: "Mumbai University",
      degree: "B.E Computer Engineering",
      graduation_month_year: "2013-2017",
      address: "Airoli,Navi mumbai",
    },
  ]);
  const [experience, setExperience] = useState<Array<IExperience>>([
    {
      id: "",
      company_name: "",
      from: "",
      to: "",
      position_title: "",
      responsibilities: ["writing"],
    },
  ]);
  useEffect(() => {
    document.title = "Resume Maker";
  }, []);

  return (
    <>
      <h1 className="text-2xl text-center bg-amber-200 font-bold ">
        Resume maker
      </h1>
      <main className="flex sm:flex-col lg:flex-row xl:flex-row m-1">
        <aside className="border-2 min-h-fullflex flex-col gap-2 w-[100px]">
          <button
            className="rounded-none bg-transparent hover:bg-amber-300"
            title="Basic Info"
          >
            <img src={personIcon} alt="" />
          </button>
          <button
            className="bg-transparent hover:bg-amber-300"
            title="Education"
          >
            <img src={eduIcon} alt="" />
          </button>
          <button className="bg-transparent hover:bg-amber-300" title="Company">
            <img src={comIcon} alt="" />
          </button>
        </aside>
        <section className="flex w-2/3 flex-wrap gap-3 p-1 mt-2 sm:shrink-0">
          {showPanel.basic && (
            <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          )}
          {showPanel.education && (
            <Education education={education} setEducation={setEducation} />
          )}
          {showPanel.exprience && (
            <Experience experience={experience} setExperience={setExperience} />
          )}
        </section>
        <section className="resume">
          <InfoGraphic
            basicInfo={basicInfo}
            education={education}
            experience={experience}
          />
        </section>
      </main>
    </>
  );
}

export default App;
