import IconInterface from "./icon"

const Kona: React.FC<IconInterface> = ({
  color,
  width = 65,
  height = 97,
  viewBox = "0 0 65 97",
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
        d="M9 33.7495V26.4777L20.0116 37.4893V20.2447M30.5915 6.32427V13.9575L20.0116 3V20.2447M20.0116 20.2447H30.5915L24.3585 26.4777M20.0116 20.2447H9L15.2871 13.9575"
        stroke={color}
        stroke-width="2.07767"
      />
    </svg>
  )
}

export default Kona
