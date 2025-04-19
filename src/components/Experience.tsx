import { IExperience } from "../App";

export interface IExpProps {
  experience: Array<IExperience>;
  setExperience: React.Dispatch<React.SetStateAction<IExperience[]>>;
}
const Experience: React.FC<IExpProps> = ({ experience, setExperience }) => {
  const addResponsibility = (id: string) => {
    console.log(id + "" + "index");
    setExperience((prev) => {
      return prev.map((exp) => {
        if (exp.id === id) {
          return { ...exp, responsibilities: [...exp.responsibilities, ""] };
        } else {
          return exp;
        }
      });
    });
  };
  const removeResponsibility = (id: string, index: number) => {};
  console.log(experience, setExperience);
  return (
    <>
      <section className="flex flex-col border-2 rounded-2xl min-w-1/2 sm:shrink-0">
        <h2 className="text-xl font-bold text-center">Experience</h2>
        {experience.map((exp, i) => (
          <section
            className="flex flex-col gap-1 p-2 overflow-scroll"
            key={exp.id}
          >
            <h2 className="font-bold">Company {i + 1}</h2>
            <form className="flex flex-col gap-1">
              <label htmlFor="company_name">Company Name</label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                defaultValue={exp.company_name ?? ""}
              />
              <label htmlFor="ptitle">Position Title</label>
              <input
                type="text"
                name="position_title"
                id="ptitle"
                defaultValue={exp.position_title ?? ""}
              />
              <label htmlFor="start">From</label>
              <input
                type="date"
                name="from"
                id="start"
                defaultValue={exp.from ?? ""}
              />
              <label htmlFor="end">To</label>
              <input
                type="date"
                name="to"
                id="end"
                defaultValue={exp.to ?? ""}
              />
              <label htmlFor="respb">Responsibilities</label>
              {exp.responsibilities.map((res, i) => (
                <section
                  key={i}
                  className="flex gap-2 w-100 justify-center align-baseline"
                >
                  <span className="text-xl mt-2">{i + 1}.</span>
                  <input
                    type="text"
                    name="responsibilities"
                    id="respb"
                    defaultValue={res[i] ?? ""}
                    className="w-2/3 "
                  />
                  <button
                    onClick={() => addResponsibility(exp.id)}
                    className="w-10 rounded-none"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeResponsibility(exp.id)}
                    className="w-10 rounded-none"
                  >
                    -
                  </button>
                </section>
              ))}
            </form>
          </section>
        ))}
      </section>
    </>
  );
};
export default Experience;
