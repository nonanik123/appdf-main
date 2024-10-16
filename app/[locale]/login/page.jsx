export const metadata = {
  title: 'Admin',
}

const Login = () => {
  return (
    <>
      <main>
        <section className="relative mb-150 pt-[200px] max-md:mb-25">
          <div className="absolute left-1/2 top-25 -z-10 h-[550px] w-full -translate-x-1/2  bg-[url('/images/hero-gradient.png')] bg-cover bg-center bg-no-repeat opacity-70 md:hidden"></div>
            <div className="mx-auto mb-12 max-w-[475px] text-center">
              <p className="section-tagline">Admin</p>
              <h2>Giriş</h2>
            </div>
            <div className="relative z-10 mx-auto max-w-[510px]">
              <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
                <div className="rounded border border-dashed border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:px-5 max-md:py-7">
                  <form>
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
                          placeholder="Email address"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-3.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="email"
                          className="mb-2 block font-jakarta_sans text-sm font-medium text-paragraph dark:text-white">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="At least 8 character"
                          className="block w-full rounded-[48px] border border-borderColor bg-white px-5 py-3.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                      </div>
                      <div className="col-span-full ">
                        <button className="btn block w-full font-medium">Login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default Login
