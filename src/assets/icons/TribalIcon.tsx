import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import Arodi from "./Arodi"
import Bjar from "./Bjar"
import Fen from "./Fen"
import Kona from "./Kona"
import Piris from "./Piris"
import Sazen from "./Sazen"
import Shema from "./Shema"
import Tsatu from "./Tsatu"

interface TribalIconProps {
  color?: string
  width?: string | number
  height?: string | number
  viewBox?: string
  tribe:
    | "Arodi"
    | "Bjar"
    | "Fen"
    | "Kona"
    | "Piris"
    | "S'azen"
    | "Shema"
    | "Tsátu"
    | undefined
    | any
}

interface Icons {
  [key: string]: any
}
const TribalIcon: React.FC<TribalIconProps> = ({
  tribe,
  color,
  width,
  height,
  viewBox,
}) => {
  const theme = useContext(ThemeContext)

  const iconProps = {
    color: color || theme.accent,
    width,
    height,
    viewBox,
  }

  const icons: Icons = {
    Arodi: <Arodi {...iconProps} />,
    Bjar: <Bjar {...iconProps} />,
    Fen: <Fen {...iconProps} />,
    Kona: <Kona {...iconProps} />,
    Piris: <Piris {...iconProps} />,
    "S'azen": <Sazen {...iconProps} />,
    Shema: <Shema {...iconProps} />,
    Tsátu: <Tsatu {...iconProps} />,
  }

  return tribe ? icons[tribe] : null
}

export default TribalIcon
