import './ProjectCard.css'

export default function ProjectCard({ project, onClick }) {
  return (
    <article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
    >
      <div className="project-card__media">
        <img src={project.coverImage?.asset?.url} alt={project.title} loading="lazy" />
      </div>
      <span className="label">{project.category}</span>
      <h3 className="project-card__title">{project.title}</h3>
      {project.description && <p className="text-muted">{project.description}</p>}
    </article>
  )
}
