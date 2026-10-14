// A pink 3D-looking gift box with a bow
export default function Gift({ tone = 0 }) {
  const tints = [['#ea9399', '#d9777f', '#c2565f'], ['#ee9aa0', '#dd7c84', '#c65a63'], ['#e88c93', '#d56f78', '#bd5058']]
  const [top, left, right] = tints[tone % 3]
  return (
    <svg className="gift-svg" viewBox="0 0 124 124" aria-hidden="true">
      <polygon points="10,40 60,22 112,40 62,60" fill={top} />
      <polygon points="10,40 62,60 62,112 10,92" fill={left} />
      <polygon points="62,60 112,40 112,92 62,112" fill={right} />
      <polygon points="30.8,48 41.2,52 91.2,33.6 80.8,29.2" fill="#f6c9cb" />
      <polygon points="82,52 92,48 40,29.2 30,32.8" fill="#f6c9cb" />
      <polygon points="30.8,48 41.2,52 41.2,104 30.8,100" fill="#f2b4b8" />
      <polygon points="82,52 92,48 92,100 82,104" fill="#e79fa4" />
      <path d="M61 42C42 12 22 28 44 42ZM61 42C80 10 102 26 80 42Z" fill="#f6c9cb" stroke="#c2565f" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="61" cy="42" rx="8" ry="6" fill="#f2b4b8" stroke="#c2565f" strokeWidth="1.5" />
    </svg>
  )
}
