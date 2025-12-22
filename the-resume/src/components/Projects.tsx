interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-12 border-b border-gray-300 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <div className="flex gap-3 text-sm">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            
            <p className="mb-3 text-gray-700 dark:text-gray-300">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
