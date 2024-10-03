'use client'
import { menuData } from '@/data/data'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import TopBar from './TopBar'

const AdminNavbar = ({ hideTopBar = false }) => {
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar)
    }
  }, [])

  return (
    <header>
      {!hideTopBar && <TopBar sticky={sticky} />}
      <div
        className={cn(
          'fixed left-0  z-50 w-full bg-transparent transition-all duration-500 max-md:z-[500]',
          sticky ? 'nav-sticky ' : '',
          !hideTopBar ? 'top-16' : 'top-8',
        )}>
        <nav className="container flex items-center">
          <div className="nav-logo">
            <Link href="/">
              <Image src={menuData.logoLight} alt="logo" className="dark:hidden" width={70} height={29} />
              <Image
                src={menuData.logoDark}
                alt="logo dark version"
                className="hidden dark:inline-block"
                width={70}
                height={29}
              />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default AdminNavbar
