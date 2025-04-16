import { useEffect, useState } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";
import InfoGraphic from "./components/InfoGraphic";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
  from: Date | null;
  to: Date | null;
}

function App() {
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
      from: null,
      to: null,
      position_title: "",
      responsibilities: [],
    },
  ]);
  useEffect(() => {
    document.title = "Resume Maker";
  }, []);

  return (
    <>
      <h1>Resume maker</h1>
      <main>
        <section className="details">
          <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
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
