"use client"

import { links } from "@/constants"
import { useMediaQuery } from "react-responsive"
import { Link as ScrollLink } from "react-scroll"

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)"
  })
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <ScrollLink offset={link.offset} to={link.target} smooth spy activeClass={`${!isMobile && "active"}`} className="cursor-pointer hover:text-accent transition-all" key={index}>
            {link.name}
          </ScrollLink>
        )
      })}
    </nav>
  )
}

export default MobileNav
