import { TbBrandReact, TbBrandNextjs, TbBrandTailwind, TbBrandNodejs, TbBrandPython } from "react-icons/tb"
import { SiExpress } from "react-icons/si"
import { LuSoup, LuRocket  } from "react-icons/lu";
import { PiMicrosoftExcelLogoLight } from "react-icons/pi";
import { BsRobot } from "react-icons/bs";
import { JSX } from "react"

export type StackItem = {
  name: string
  category: "Frontend" | "Backend" | "Automatización"
  icon: JSX.Element
  color: string
}

export const stack: StackItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: <TbBrandReact size={20} />,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <TbBrandNextjs size={24} />,
    color: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <TbBrandTailwind size={24} />,
    color: "#38BDF8",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: <TbBrandNodejs size={24} />,
    color: "#84CC16",
  },
  {
    name: "Express",
    category: "Backend",
    icon: <SiExpress size={24} />,
    color: "#ffffff",
  },

  // Automatización
  {
    name: "Python",
    category: "Automatización",
    icon: <TbBrandPython size={24} />,
    color: "#FACC15",
  },
  {
    name: "BeautifulSoup",
    category: "Automatización",
    icon: <LuSoup size={24} />,
    color: "#a78bfa",
  },
  {
    name: "openpyxl",
    category: "Automatización",
    icon: <PiMicrosoftExcelLogoLight size={24} />,
    color: "#4ade80",
  },
  {
    name: "Power Automate",
    category: "Automatización",
    icon: <BsRobot size={24} />,
    color: "#0ea5e9",
  },
  {
    name: "Rocketbot",
    category: "Automatización",
    icon: <LuRocket  size={24} />, 
    color: "#f97316",
  },
]