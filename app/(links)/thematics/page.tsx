import Image from "next/image";

function Thematics() {
  const data = [
    {
      title: "1.",
      text: "Risk Assessment and Economic Analysis of arthropods and arbo diseases through epidemiological investigation (Participatory Epidemiology, retrospective/prospective, Sentinel surveillance, randomized sampling etc.)",
      img: "/image-1-min.jpg",
    },
    {
      title: "2.",
      text: "Pathogen detection using conventional and Imolecular tools",
      img: "/image-2-min.jpg",
    },
    {
      title: "3.",
      text: "Chemotherapeutic control using in vitro and in vivo models against various developmental stages of ticks",
      img: "/image-3-min.jpg",
    },
    {
      title: "4.",
      text: "Alternate control strategies (functional genomics, siRNAs, nanoparticals, entomopathogenics etc)",
      img: "/image-4-min.jpg",
    },
  ];
  return (
    <section className="container">
      <h1 className="text-4xl mb-8">Thematics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 p-6 overflow-hidden rounded-lg shadow-lg relative min-h-24 sm:min-h-thematic-min justify-end bg-gradient-to-t from-slate-950 to-transparent"
          >
            <h2 className="text-6xl font-semibold z-10 text-white">
              {item.title}
            </h2>
            <p className="text-lg z-10 hyphens-auto mb-4 text-white">
              {item.text}
            </p>
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded absolute top-0 left-0 -z-10"
              width={500}
              height={500}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Thematics;
