'use client'
import { useState } from 'react'
import FadeUpAnimation from '@/components/tr/animations/FadeUpAnimation'
import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Perform validation if necessary
    if (!name || !email || !password) {
      setError('All fields are required.')
      return
    }

    try {
      const response = await fetch('/api/auth/signup', {
        // Ensure this is the correct route for your signup
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        throw new Error('User with this email already exists!')
      }

      router.push('/admin')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative mb-150 pt-[200px]">
          <div className="absolute left-1/2 top-25 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
          <FadeUpAnimation className="container relative">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Sign up</p>
              <h2>
                Connect with our <br /> community
              </h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[510px]">
              <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-12 gap-y-6 ">
                      <div className="col-span-12">
                        <label
                          htmlFor="name"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                      </div>
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
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                      </div>
                      <div className="relative col-span-full">
                        <label
                          htmlFor="password"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Password
                        </label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-[65%] -translate-y-1/2 transform text-paragraph dark:text-white"
                          onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>

                      {error && <div className="col-span-full text-red-500">{error}</div>}

                      <div className="col-span-full ">
                        <button className="btn block w-full">Sign Up</button>
                      </div>
                    </div>
                  </form>
                  <div className="relative py-8 after:absolute after:top-1/2 after:h-[1px] after:w-full after:-translate-y-1/2 after:border after:border-dashed after:border-borderColor dark:after:border-borderColor-dark">
                    <span className="absolute left-1/2 top-1/2 z-10 inline-block w-10 -translate-x-1/2 -translate-y-1/2 bg-white text-center dark:bg-dark-200">
                      Or
                    </span>
                  </div>
                  <div className="mb-8">{/* Google and Facebook buttons */}</div>
                  <p className="flex flex-row gap-2  font-jakarta_sans text-sm font-medium leading-[24px] ">
                    <div>Already Have an account?</div>
                    <Link
                      href="/login"
                      className="relative inline-block overflow-hidden align-bottom font-jakarta_sans text-sm font-medium leading-[24px] text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                      login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </FadeUpAnimation>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SignUpPage
