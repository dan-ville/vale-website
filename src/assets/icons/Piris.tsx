import IconInterface from "./icon"

const Piris: React.FC<IconInterface> = ({
  color,
  width = 79,
  height = 96,
  viewBox = "0 0 79 96",
}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_12_86)">
        <path
          d="M20 1V22.6063M20 22.6063L5 37.5753V22.6063M20 22.6063L35 37.5753V22.6063M20 22.6063L27.5 15.1218M20 22.6063L12.5 15.1218"
          stroke={color}
          stroke-width="2.05479"
        />
      </g>
      <defs>
        <clipPath id="clip0_12_86">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Piris
