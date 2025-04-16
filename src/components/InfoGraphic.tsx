import { IBasic, IEducation, IExperience } from "../App";

import "./InfoG.css";

export interface IInfoGraphProps {
  basicInfo: IBasic;
  education: Array<IEducation>;
  experience: Array<IExperience>;
}

const InfoGraphic: React.FC<IInfoGraphProps> = ({
  basicInfo,
  education,
  experience,
}) => {
  return (
    <section className="infoG">
      <header>
        <h1>{basicInfo?.fullname}</h1>
        <h2>{basicInfo.job_title}</h2>
        <p>
          {basicInfo?.email} | {basicInfo?.phone} | {basicInfo.personal_site}
        </p>
      </header>
      <section>
        <article className="summary">
          <h3>SUMMARY</h3>
          <p>
            {" "}
            Passionate web developer with a degree in Software Engineering and
            hands-on experience in developing dynamic web applications.
            Proficient in HTML, CSS, and JavaScript, with additional skills in
            responsive design frameworks like Bootstrap.I am eager to contribute
            my creativity and technical skills to a team that works
            collaboratively.
          </p>
        </article>
        <article className="tech_skills">
          <h3>TECHNICAL SKILLS</h3>
          <ul className="tech_skills">
            <li>Prototyping Tools</li>
            <li>User Research </li>
            <li>Information Architecture</li>
            <li>Interaction Design</li>
            <li>Visual Design</li>
            <li>Usability Heuristics </li>
          </ul>
        </article>
        <article>
          <h3>EDUCATION</h3>
          <section className="eduplace">
            {education.map((details) => (
              <article key={details.id}>
                <section className="degree">
                  <h4>{details.degree}</h4>
                  <span>{details.graduation_month_year}</span>
                </section>
                <p>{details.uni_name}</p>
                <p>{details.address}</p>
              </article>
            ))}
          </section>
        </article>
        <article>
          <h3>Experience</h3>
        </article>
      </section>
    </section>
  );
};

export default InfoGraphic;
