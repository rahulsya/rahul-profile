export default function Projects({ projects }) {
  return (
    <div className="layout flex flex-col ">
      <div className="text-xl text-gelap-primary dark:text-terang-primary font-semibold mb-4">
        Projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="w-full p-4 bg-terang-primary dark:bg-gelap-primary flex flex-col rounded-lg text-terang-primary shadow-lg"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-gelap-primary capitalize dark:text-terang-primary font-semibold pb-2 "
              >
                {project.name}
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-40 lg:h-64 w-full object-cover rounded-md"
                />
              </a>
              <p className="mt-2 text-gelap-primary dark:text-terang-primary py-2">
                {project.description[0]}
              </p>
              <div className="flex flex-row flex-wrap justify-start ">
                {project.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="py-1 px-4 text-gelap-primary dark:text-terang-primary bg-terang-secondary dark:bg-gelap-secondary rounded-md mt-2 mr-2"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
