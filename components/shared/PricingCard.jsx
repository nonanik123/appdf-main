'use client'
import { cn } from '@/utils/cn'
import Link from 'next/link'

const PricingCard = ({ price, isAnnual }) => {
  return (
    <div>
      <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200">
        <div
          className={cn(
            'rounded border border-dashed border-gray-100 p-8 dark:border-borderColor-dark',
            price.featured && 'lg:px-8 lg:pb-15 lg:pt-3',
          )}>
          {price.featured && (
            <div className="mb-2.5 flex justify-end">
              <span className="-mr-4 rounded-full bg-primary px-3 py-1.5 font-medium text-paragraph">
                Save {price.save}
              </span>
            </div>
          )}
          <h3 className="mb-2">{price.title}</h3>
          <p className="mb-6">{price.desc}</p>
          {isAnnual ? (
            <div className="price-month mb-16">
              <h2>
                $<span>{price.priceMonthly}</span>
              </h2>
              <p>Yıllık</p>
            </div>
          ) : (
            <div className="price-year mb-16">
              <h2>
                $<span>{price.priceYearly}</span>
              </h2>
              <p>Aylık</p>
            </div>
          )}

          <ul className=" after:bg-[url(/images/banking/border.svg')] relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-full after:bg-center after:bg-no-repeat dark:after:bg-[url('/images/banking/border-dark.svg')]">
            {price.priceList.map((items) => (
              <li className="mb-6 flex items-center gap-3.5" key={items}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-primary" />
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-paragraph"
                  />
                </svg>
                <span>{items.name}</span>
              </li>
            ))}
          </ul>

          {price.featured ? (
            <Link href="/contact" className="btn w-full py-3 text-center">
              Get Started Now
            </Link>
          ) : (
            <Link href="/contact" className="btn-outline w-full py-3 text-center dark:bg-transparent">
              Start Free Trial
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingCard
