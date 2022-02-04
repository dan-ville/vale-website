import IconInterface from "./icon"

const Fen: React.FC<IconInterface> = ({
  color,
  width = "52",
  height = "96",
  viewBox = "0 0 52 96",
}) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 29.1604C11 31.6143 11.9748 33.9678 13.7101 35.703C15.4453 37.4382 17.7987 38.413 20.2527 38.413M20.2527 38.413C22.7067 38.413 25.0601 37.4382 26.7953 35.703C28.5305 33.9678 29.5054 31.6143 29.5054 29.1604M20.2527 38.413V15.6836M20.2527 0.999997V15.6836M20.2527 15.6836L29.5054 6.43092V15.6836M20.2527 15.6836L11 24.9363V15.6836"
        stroke={color}
        stroke-width="2.01145"
      />
    </svg>
  )
}

export default Fen
