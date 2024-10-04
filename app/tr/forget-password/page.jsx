'use client'
import { useState } from 'react'
import FadeUpAnimation from '@/components/tr/animations/FadeUpAnimation'
import Footer from '@/components/tr/footer/Footer'
import SecondaryNavbar from '@/components/tr/navbar/SecondaryNavbar'
import NewsLetter from '@/components/tr/shared/NewsLetter'
import { useRouter } from 'next/navigation'

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match.")
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }), // Include email in the request
      })

      if (!response.ok) {
        throw new Error('Failed to reset password.')
      }

      const data = await response.json()
      setSuccess(data.message)
      setEmail('')
      setNewPassword('')
      setConfirmPassword('')
      router.push('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SecondaryNavbar />
      <main>
        <section className="relative mb-150 pt-[200px] max-md:pt-25">
          <div className="absolute left-1/2 top-25 -z-10 h-[550px] w-full -translate-x-1/2 bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-30 md:hidden"></div>
          <FadeUpAnimation className="container relative">
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Reset Password</p>
              <h2>Provide a new password</h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[510px]">
              <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-12 gap-y-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="email"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                          required
                        />
                      </div>
                      <div className="relative col-span-full">
                        <label
                          htmlFor="newpassword"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          New Password
                        </label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="newpassword"
                          id="newpassword"
                          placeholder="Enter new password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-[65%] -translate-y-1/2 transform text-paragraph dark:text-white"
                          onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                      <div className="relative col-span-full">
                        <label
                          htmlFor="confirmpassword"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Confirm Password
                        </label>
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmpassword"
                          id="confirmpassword"
                          placeholder="Re-enter new password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-[65%] -translate-y-1/2 transform text-paragraph dark:text-white"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                      {error && <div className="col-span-full text-red-500">{error}</div>}
                      {success && <div className="col-span-full text-green-500">{success}</div>}
                      <div className="col-span-full">
                        <button className="btn block w-full" disabled={loading}>
                          {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
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

export default ForgetPassword
