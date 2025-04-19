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
    <section className="flex flex-col p-2 gap-1 border-2 h-90 overflow-auto rounded-2xl sm:shrink-0">
      <h2 className="text-2xl font-bold text-center">Education</h2>
      <div className="flex flex-col gap-2 p-2">
        {education.map((singleDegree, i) => (
          <section key={singleDegree.id} className="m-2">
            <h2 className="font-bold text-center">Degree {i + 1}</h2>
            <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
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
              <section className="flex gap-2 justify-center">
                <button onClick={() => handleRemove(singleDegree.id)}>
                  Remove
                </button>
                <button type="submit">Save</button>
              </section>
            </form>
          </section>
        ))}
        <button onClick={handleAddAction} className="mx-auto w-3/4">
          Add Education
        </button>
      </div>
    </section>
  );
};
export default Education;
