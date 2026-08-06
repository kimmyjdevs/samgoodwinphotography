import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSanityData } from '../hooks/useSanityData'
import { PROJECTS_QUERY } from '../lib/queries'
import { fallbackProjects, projectCategories } from '../lib/fallbackContent'
import FilterTabs from '../components/FilterTabs'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'
import SEO from '../components/SEO'
import './Portfolio.css'

const FILTER_OPTIONS = projectCategories.map((value) => ({
  value,
  label: value === 'all' ? 'all' : value,
}))

export default function Portfolio() {
  const { data: projects } = useSanityData(PROJECTS_QUERY, fallbackProjects)
  const [active, setActive] = useState('all')
  const [lightboxProject, setLightboxProject] = useState(null)

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((project) => project.category === active)),
    [projects, active],
  )

  return (
    <div className="section">
      <SEO
        title="Portfolio"
        description="A closer look at the stories, people and places behind the images."
      />
      <div className="container">
        <span className="eyebrow">Portfolio</span>
        <h1>Selected Work</h1>
        <p className="portfolio-subtext text-muted">
          A closer look at the stories, people and places behind the images.
        </p>

        <FilterTabs options={FILTER_OPTIONS} active={active} onChange={setActive} />

        {filtered.length === 0 ? (
          <p className="portfolio-empty text-muted">More work is on its way — check back soon.</p>
        ) : (
          <div className="portfolio-grid">
            {filtered.map((project) => (
              <ProjectCard key={project._id} project={project} onClick={() => setLightboxProject(project)} />
            ))}
          </div>
        )}

        <div className="portfolio-footer-cta">
          <Link to="/contact" className="link-arrow">
            Get In Touch &rarr;
          </Link>
        </div>
      </div>

      {lightboxProject && (
        <Lightbox
          images={[lightboxProject.coverImage, ...(lightboxProject.gallery || [])].filter(Boolean)}
          title={lightboxProject.title}
          onClose={() => setLightboxProject(null)}
        />
      )}
    </div>
  )
}
