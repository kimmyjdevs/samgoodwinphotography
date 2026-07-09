import './GalleryCard.css'

export default function GalleryCard({ item }) {
  return (
    <figure className="gallery-card">
      <img src={item.image?.asset?.url} alt={item.title} loading="lazy" />
      <figcaption className="gallery-card__caption">
        <span className="label">{item.category}</span>
        <span className="gallery-card__title">{item.title}</span>
      </figcaption>
    </figure>
  )
}
