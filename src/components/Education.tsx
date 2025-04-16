import { IEducation } from "../App";

interface IEducationProps {
  education: Array<IEducation>;
  setEducation: React.Dispatch<React.SetStateAction<IEducation[]>>;
}

const Education: React.FC<IEducationProps> = ({ setEducation, education }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const id = formData.get("id") as string;
    const uni_name = formData.get("uni_name") as string;
    const degree = formData.get("degree") as string;
    const graduation_month_year = formData.get(
      "graduation_month_year"
    ) as string;
    const address = formData.get("address") as string;
    const isAlreadyPresent = education.find((course) => course.id === id);
    if (isAlreadyPresent) {
      const updatedCourseDetails = {
        id,
        uni_name,
        degree,
        graduation_month_year,
        address,
      };
      setEducation((prev) =>
        prev.map((course) => {
          if (course.id === isAlreadyPresent.id) {
            return updatedCourseDetails;
          } else {
            return course;
          }
        })
      );
    } else {
      setEducation((prev) => [
        ...prev,
        { id, degree, graduation_month_year, uni_name, address },
      ]);
    }
  };
  const handleAddAction = () => {
    setEducation((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        uni_name: "",
        degree: "",
        graduation_month_year: "",
        address: "",
      },
    ]);
  };
  const handleRemove = (i: string) => {
    console.log(i);
    setEducation((prev) => prev.filter((edu) => edu.id !== i));
  };
  return (
    <section className="info">
      <h2 className="eduhead">Education</h2>
      <div className="eduspace">
        {education.map((singleDegree, i) => (
          <section className="degreeInfo" key={singleDegree.id}>
            <h2>Degree {i + 1}</h2>
            <form className="eduform" onSubmit={handleSubmit}>
              <label htmlFor="uni_name">University name</label>
              <input type="hidden" name="id" value={singleDegree.id} required />
              <input
                type="text"
                name="uni_name"
                id="uni_name"
                defaultValue={singleDegree.uni_name ?? ""}
                required
              />
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                name="degree"
                id="degree"
                defaultValue={singleDegree.degree ?? ""}
                required
              />
              <label htmlFor="g_mon_year">Graduation month year</label>
              <input
                type="text"
                name="graduation_month_year"
                id="g_mon_year"
                defaultValue={singleDegree.graduation_month_year ?? ""}
                required
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                defaultValue={singleDegree.address ?? ""}
                required
              />
              <section className="fcontrols">
                <button onClick={() => handleRemove(singleDegree.id)}>
                  Remove
                </button>
                <button type="submit">Save</button>
              </section>
            </form>
          </section>
        ))}
        <button onClick={handleAddAction}>Add Education</button>
      </div>
    </section>
  );
};
export default Education;
