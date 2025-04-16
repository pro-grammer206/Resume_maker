import { IExperience } from "../App";

export interface IExpProps {
  experience: Array<IExperience>;
  setExperience: React.Dispatch<React.SetStateAction<IExperience[]>>;
}
const Experience: React.FC<IExpProps> = ({ experience, setExperience }) => {
  console.log(experience, setExperience);
  return (
    <>
      <section className="info">
        <h2>Experience</h2>
      </section>
    </>
  );
};
export default Experience;
