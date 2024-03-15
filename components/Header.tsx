"use client"

import { useEffect, useState } from "react"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Link from "next/link"
import Image from "next/image"
import { MdMenu } from "react-icons/md"

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false)

  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [headerActive])

  return (
    <header className={`${headerActive ? "h-[100px]" : "h-[124px]"} fixed top-0 w-full bg-primary-200 h-[100px] transition-all z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/** logo */}
        <Link href="">
          <Image src={"/assets/img/logo.png"} width={117} height={55} alt="" />
        </Link>
        {/** mobile nav - hidden on large devices */}
        <MobileNav containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} ${openNav ? "max-h-max pt-8 pb-10 border-t border-white/10" : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"} flex flex-col text-center gap-8 fixed bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium text-white xl:hidden`} />
        {/** desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex" />
        {/** hide/open menu button */}
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase font-medium">login</button>
            <button className="hover:text-accent transition-all text-base uppercase font-medium">register</button>
            <button onClick={() => setOpenNav(!openNav)} className="text-white xl:hidden">
              <MdMenu className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
