import { IBasic } from "../App";

export interface IBasicProps {
  basicInfo?: IBasic;
  setBasicInfo: React.Dispatch<React.SetStateAction<IBasic>>;
}

const BasicInfo: React.FC<IBasicProps> = ({ basicInfo, setBasicInfo }) => {
  function handleSubmit(formData: FormData) {
    const fullname = formData.get("fullname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const personal_site = formData.get("personal_site") as string;
    const job_title = formData.get("job_title") as string;
    console.log(fullname + " " + email + " " + phone);
    if (fullname && email && phone) {
      setBasicInfo({ fullname, email, phone, personal_site, job_title });
    }
  }

  return (
    <section className="info">
      <h2>Basic Information</h2>
      <form className="binfo" action={handleSubmit}>
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          defaultValue={basicInfo?.fullname}
        />
        <label htmlFor="email">Emaill</label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={basicInfo?.email}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          defaultValue={basicInfo?.phone}
        />
        <label htmlFor="site">Personal site</label>
        <input
          type="text"
          name="personal_site"
          id="site"
          defaultValue={basicInfo?.personal_site}
        />
        <label htmlFor="jtitle">Job Title</label>
        <input
          type="text"
          name="job_title"
          id="jtitle"
          defaultValue={basicInfo?.job_title}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default BasicInfo;
