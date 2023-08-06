async function getProjects() {
  const response = await fetch(process.env.URL + "/api/projects", {
    next: {
      revalidate: 60,
    },
  });
  const json = await response.json();
  return json;
}

async function Projects() {
  const projects = await getProjects();

  return (
    <section className="container mx-auto">
      <h1 className="text-3xl font-bold py-4">Projects</h1>
      {/* Use grid */}
      <div className="grid gap-4">
        {projects.map((project: any) => (
          <div className="w-full" key={project._id}>
            <article className="bg-white rounded-md shadow-md px-6 py-4 border sm:flex sm:items-center sm:gap-4 sm:justify-between">
              <h2 className="text-xl font-bold text-primaryDark mb-2 sm:mb-0">
                {project.year}
              </h2>
              <p className="text-gray-800 leading-normal mb-2 max-w-lg sm:mb-0">
                {project.description}
              </p>
              <p className="text-gray-600 font-light text-2xl">
                {project.budget}
              </p>
              <p className="text-white bg-accentLight w-max p-1 rounded-md px-2">
                {project.status}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
