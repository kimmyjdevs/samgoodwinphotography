import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={project.coverImage?.asset?.url} alt={project.title} loading="lazy" />
      </div>
      <span className="label">{project.category}</span>
      <h3 className="project-card__title">{project.title}</h3>
      {project.description && <p className="text-muted">{project.description}</p>}
    </article>
  )
}
