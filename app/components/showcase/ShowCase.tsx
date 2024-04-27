import DisplayCard from "./DisplayCard";

export default function ShowCase() {
  const cards = [
    {
      title: "Our Vision",
      description:
        "The Molecular Parasitology & One Health Laboratory envisions itself as a leading force in deciphering the molecular underpinnings of parasitic diseases that afflict both animals and humans. We strive to be at the forefront of scientific discovery, unraveling the intricate mechanisms employed by parasites to establish and maintain infections. Through our research, we aim to contribute significantly to a deeper understanding of these complex diseases.",
      image: "/vision.jpg",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to drive innovative research that delves into the molecular epidemiology of parasitic diseases. By focusing on this approach, we aim to revolutionize the way we diagnose and treat these infections. We are committed to developing novel diagnostic tools that enable rapid and accurate detection, paving the way for improved patient outcomes. Furthermore, our research seeks to identify and evaluate the effectiveness of existing and emerging therapeutic strategies, ultimately aiming to achieve control and ultimately prevent parasitic diseases in both animals and humans.",
      image: "/mission.jpg",
    },
    {
      title: "Objectives",
      description:
        "To achieve our ambitious mission, we prioritize a clear set of objectives. We're dedicated to uncovering the Achilles' heels of parasites – those key molecules vital for their survival and spread. This knowledge will pave the way for targeted interventions, ultimately weakening their grip on both animals and humans.  Alongside this, we're committed to developing rapid and reliable diagnostic tools. Faster and more accurate detection translates to improved disease management and better patient outcomes.",
      image: "/objective.jpg",
    },
  ];

  return (
    <section className="container sm:px-8">
      <article className="relative h-max rounded-md overflow-hidden">
        <video
          src="/header-video-540p.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <div className="flex flex-col p-6 sm:p-8 md:py-16 lg:py-24">
          <h1 className="text-4xl text-white max-w-xs mb-4 md:max-w-sm lg:max-w-md">
            Molecular Parasitology &amp; One Health Laboratory
          </h1>
          <p className="mt-2 leading-normal space-y-3 text-white max-w-prose">
            The Molecular Parasitology &amp; One Health Laboratory is a
            research-based laboratory that is working on the molecular
            epidemiology of parasitic diseases of animals and humans.
          </p>
        </div>
      </article>

      {cards.map((card, index) => (
        <DisplayCard key={index} {...card} />
      ))}
      <hr className="h-1 rounded-lg my-3 bg-gray-300 border-0 mx-20" />
    </section>
  );
}
