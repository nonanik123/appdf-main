import { StarSvg } from '@/data/svgImages'
import MarqueeHomeFivePage from './MarqueeHomeFivePage'

const starList = [
  {
    id: 1,
    star: StarSvg,
  },
  {
    id: 2,
    star: StarSvg,
  },
  {
    id: 3,
    star: StarSvg,
  },
  {
    id: 4,
    star: StarSvg,
  },
  {
    id: 5,
    star: StarSvg,
  },
]

const TrustedCompany = () => {
  return (
    <section>
      <div className=" mx-auto mb-15 px-[10px] text-center max-lg:px-2.5">
        <h2 className="mb-12">
          Hosting solutions trusted by the owners <br />
          of&nbsp;2,800,000&nbsp;domains.
        </h2>
        <div className="mx-auto flex w-fit ">
          <div className="flex items-center gap-4 max-md:flex-col">
            <div className="flex items-center gap-4">
              <p className="text-[12px] font-bold">Excellent</p>
              <ul className="flex gap-1.5 ">
                {starList.map((star) => (
                  <li key={star.id}>
                    <div className="flex h-5 w-5 items-center justify-center bg-[#219653]">
                      <StarSvg />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1.5 text-[12px]  font-bold">
                <strong className="text-[12px] font-bold">436</strong>
                <span className="font-normal">reviews on</span>
              </p>
              <div className="flex items-center  gap-1.5">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.83337 10.4792L10.875 9.70833L12.1459 13.625L7.83337 10.4792ZM14.8334 5.41667H9.47921L7.83337 0.375L6.18754 5.41667H0.833374L5.16671 8.54167L3.52087 13.5833L7.85421 10.4583L10.5209 8.54167L14.8334 5.41667Z"
                    fill=""
                    className="fill-[#219653]"></path>
                </svg>
                <p className="text-[12px] font-bold">Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeHomeFivePage />
      <button className="btn-outline mx-auto block">Start Your Journey</button>
    </section>
  )
}

export default TrustedCompany
