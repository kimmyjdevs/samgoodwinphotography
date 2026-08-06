import { useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './icons'
import './Lightbox.css'

export default function Lightbox({ images, startIndex = 0, title, onClose }) {
  const [index, setIndex] = useState(startIndex)
  const closeButtonRef = useRef(null)

  const count = images.length
  const goPrev = () => setIndex((i) => (i - 1 + count) % count)
  const goNext = () => setIndex((i) => (i + 1) % count)

  useEffect(() => {
    closeButtonRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && count > 1) goPrev()
      if (event.key === 'ArrowRight' && count > 1) goNext()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  if (count === 0) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} — photo viewer` : 'Photo viewer'}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button ref={closeButtonRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
        <CloseIcon width={26} height={26} />
      </button>

      {count > 1 && (
        <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={goPrev} aria-label="Previous photo">
          <ChevronLeftIcon width={30} height={30} />
        </button>
      )}

      <figure className="lightbox__frame">
        <img src={images[index]?.asset?.url} alt={title ? `${title} — photo ${index + 1}` : `Photo ${index + 1}`} />
        {count > 1 && (
          <figcaption className="lightbox__counter">
            {index + 1} / {count}
          </figcaption>
        )}
      </figure>

      {count > 1 && (
        <button type="button" className="lightbox__nav lightbox__nav--next" onClick={goNext} aria-label="Next photo">
          <ChevronRightIcon width={30} height={30} />
        </button>
      )}
    </div>
  )
}
