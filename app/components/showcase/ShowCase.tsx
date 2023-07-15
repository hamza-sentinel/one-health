import ReactPlayer from "react-player/lazy";
import DisplayCard from "./DisplayCard";

export default function ShowCase() {
  const cards = [
    {
      title: "Our Vision",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolores ad accusamus, possimus totam velit placeat in rerum quia, quisquam sint excepturi accusantium consectetur incidunt est non libero quae recusandae. Nisi, sapiente ea. Dolorum, ex?",
      image: "/vision.jpg",
    },
    {
      title: "Our Mission",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolores ad accusamus, possimus totam velit placeat in rerum quia, quisquam sint excepturi accusantium consectetur incidunt est non libero quae recusandae. Nisi, sapiente ea. Dolorum, ex?",
      image: "/mission.jpg",
    },
    {
      title: "Objectives",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolores ad accusamus, possimus totam velit placeat in rerum quia, quisquam sint excepturi accusantium consectetur incidunt est non libero quae recusandae. Nisi, sapiente ea. Dolorum, ex?",
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
        <div className="z-10 flex flex-col p-6">
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
