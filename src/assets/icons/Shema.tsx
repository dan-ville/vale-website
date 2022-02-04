import IconInterface from './icon';

const Shema: React.FC<IconInterface> = ({
  color,
  width = 98,
  height = 81,
  viewBox = "0 0 98 81",
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
        d="M20 21.1155L11.5 12.5577L7.25 8.27887M20 21.1155L28.5 12.5577L32.75 8.27887M20 21.1155V35.5714M32.75 8.27887L37 4H20H3L7.25 8.27887M32.75 8.27887V35.5714M7.25 8.27887V35.5714"
        stroke={color}
        stroke-width="2.02381"
      />
    </svg>
  )
}

export default Shema;
