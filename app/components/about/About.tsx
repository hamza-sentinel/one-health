import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="container flex justify-center flex-col mt-6 sm:flex-row sm:gap-8 sm:items-center"
    >
      <Image
        src="/CEO.jpeg"
        alt="CEO"
        width={320}
        height={320}
        className="w-full aspect-square object-cover rounded sm:rounded-full"
      />
      <div className="content">
        <p className="text-sm text-gray-500 mt-2">Founder &amp; CEO</p>
        <h3 className="text-2xl text-gray-900 font-bold mt-2">
          Dr. Muhammad Sohail Sajid | Associate Professor (Tenured)
        </h3>
        <div className="text-gray-800 mt-2 leading-normal space-y-3">
          <p>
            Ex-Chairman, Department of Parasitology | Chartered Member, Board of
            Studies, Department of Epidemiology and Public Health | Chartered
            Member, Board of Studies, Climate Change Graduate Group, Institute
            of Soil and Environmental Sciences | British Council&#39;s Master
            Trainer for Active Citizens Programme
          </p>
          <p>
            Section Editor, Pakistan Journal of Agricultural Sciences (JCR
            Impact Factor: 0.748)
          </p>
          <p>University of Agriculture | Faisalabad, Pakistan</p>
          <p>
            T: +92 (041) 9200161-70/ 3130 | D: +92 (41) 262-8667 | Mob &
            Whatsapp:{" "}
            <a className="text-blue-500" href="https://wa.me/+923336508667">
              +92 (333) 650-8667
            </a>{" "}
            | ORCID: 0000-0002-3863-6480
          </p>
          <p>
            URL:{" "}
            <a
              className="text-blue-500"
              href="http://www.uaf.edu.pk/EmployeeDetail.aspx?userid=37"
            >
              Employee Details
            </a>{" "}
            | Linked In:{" "}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/muhammad-sajid-49901321/"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
