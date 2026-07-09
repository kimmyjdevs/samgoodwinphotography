import './FilterTabs.css'

export default function FilterTabs({ options, active, onChange }) {
  return (
    <div className="filter-tabs" role="group" aria-label="Filter">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={active === option.value}
          className={'filter-tabs__tab label' + (active === option.value ? ' filter-tabs__tab--active' : '')}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
