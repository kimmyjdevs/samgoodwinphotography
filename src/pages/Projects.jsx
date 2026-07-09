import { useMemo, useState } from 'react'
import { useSanityData } from '../hooks/useSanityData'
import { PROJECTS_QUERY } from '../lib/queries'
import { fallbackProjects, projectCategories } from '../lib/fallbackContent'
import FilterTabs from '../components/FilterTabs'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

const FILTER_OPTIONS = projectCategories.map((value) => ({
  value,
  label: value === 'all' ? 'all projects' : value,
}))

export default function Projects() {
  const { data: projects } = useSanityData(PROJECTS_QUERY, fallbackProjects)
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((project) => project.category === active)),
    [projects, active],
  )

  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">Projects</span>
        <h1>Recent Projects</h1>
        <p className="projects-subtext text-muted">
          A closer look at the stories, people and places behind the images.
        </p>

        <FilterTabs options={FILTER_OPTIONS} active={active} onChange={setActive} />

        {filtered.length === 0 ? (
          <p className="projects-empty text-muted">
            New project features are on their way — check back soon.
          </p>
        ) : (
          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
