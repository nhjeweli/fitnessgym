"use client"

import { links } from "@/constants"
import { Link as ScrollLink } from "react-scroll"

const Nav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink offset={link.offset} to={link.target} smooth spy activeClass="active" className="cursor-pointer hover:text-accent transition-all" key={index}>
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}

export default Nav
