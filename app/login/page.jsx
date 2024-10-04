'use client'
import FadeUpAnimation from '@/components/animations/FadeUpAnimation'
import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import NewsLetter from '@/components/shared/NewsLetter'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', { email, password })
    const loginData = { email, password }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      console.log('Response:', response)
      const data = await response.json()

      if (response.ok) {
        console.log('Login successful:', data)
        router.push('/admin')
      } else {
        console.error('Login failed:', data.message)
        alert(data.message) // Display error message
      }
    } catch (error) {
      console.error('An error occurred during login:', error)
    }
  }

  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative mb-150 pt-[200px] max-md:mb-25">
          <div className="absolute left-1/2 top-25 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <FadeUpAnimation className="container relative">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Login</p>
              <h2>
                Login to your <br />
                account
              </h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[510px]">
              <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
                <div className="rounded-full bg-primary-200/30 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full bg-primary-200/50 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
                <div className="-ml-[170px] rounded-full bg-primary-200/30 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
              </div>
              <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-12 gap-y-6 ">
                      <div className="col-span-12">
                        <label
                          htmlFor="email"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-3.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                          required
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="password"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-3.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                            required
                          />
                          <button
                            type="button"
                            className="absolute right-4 top-1/2 -translate-y-1/2 transform text-paragraph dark:text-white"
                            onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? '🙈' : '👁️'} {/* Toggle icon */}
                          </button>
                        </div>
                      </div>
                      <div className="col-span-full flex items-center justify-between">
                        <label htmlFor="remember-me" className="flex items-center gap-x-3">
                          <input id="remember-me" type="checkbox" className="peer sr-only" />
                          <div className="relative h-5 w-5 cursor-pointer rounded-full border border-borderColor after:absolute after:left-1/2 after:top-1/2 after:h-2.5 after:w-2.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-primary after:opacity-0 peer-checked:border-primary peer-checked:after:opacity-100 dark:border-borderColor-dark dark:peer-checked:border-primary"></div>

                          <span className="block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                            Remember me
                          </span>
                        </label>
                        <Link
                          href="/forget-password"
                          className="relative inline-block overflow-hidden align-bottom font-jakarta_sans text-sm font-medium leading-[24px] text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                          Forget Password
                        </Link>
                      </div>
                      <div className="col-span-full">
                        <button type="submit" className="btn block w-full font-medium">
                          Login
                        </button>
                      </div>
                      <div className="col-span-full">
                        <p className="flex flex-row gap-2  font-jakarta_sans text-sm font-medium leading-[24px]">
                          <div>Not registered yet?</div>
                          <Link
                            href="/signup"
                            className="relative inline-block overflow-hidden align-bottom font-jakarta_sans text-sm font-medium leading-[24px] text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                            Create an Account
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default Login
