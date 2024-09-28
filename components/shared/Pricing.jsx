'use client'
import { cn } from '@/utils/cn'
import { useState } from 'react'
import PricingCards from './PricingCards'

const Pricing = ({ className = 'pt-150', showPricingText = true, largeTitle = false, pricingDescription = false }) => {
  const [isAnnual, setIsAnnual] = useState(false)
  return (
    <section className={cn('relative -z-0 overflow-hidden bg-white pb-150 dark:bg-dark-300 max-md:mb-25', className)}>
      <div className="container">
        <div className={`${largeTitle ? 'max-w-[900px]' : 'max-w-[475px]'} mx-auto mb-12 text-center`}>
          <div className={cn(showPricingText ? '' : 'hidden')}>
            <p>Fiyatlandırma</p>
            {largeTitle ? (
              <h1>İşletmeniz için en doğrusu</h1>
            ) : (
              <h2>İşletmeniz için en doğrusu</h2>
            )}
            {pricingDescription ? (
              <p className="mb-12 mt-10">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense <br /> text. It&lsquo;s
                not Latin, though it looks like it
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="pricing mt-8">
            <label className="relative z-[110] inline-flex cursor-pointer items-center">
              <span className="mr-2.5 text-base font-semibold text-paragraph dark:text-white">Aylık</span>
              <input
                type="checkbox"
                id="priceCheck"
                className="peer sr-only"
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <div className="relative h-[34px] w-15 rounded-[20px] bg-paragraph before:absolute  before:left-1/2 before:top-1/2 before:h-[calc(100%-10px)] before:w-[calc(100%-10px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[20px]  before:border before:border-dashed before:border-white/40 before:content-[''] after:absolute after:start-[5px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-primary after:transition-all after:content-[''] peer-checked:after:start-[7px] peer-checked:after:translate-x-full "></div>
              <span className="ms-2.5 text-base font-semibold text-paragraph dark:text-white">Yıllık</span>
            </label>
          </div>
        </div>
        {/* Pricing Cards */}
        <PricingCards isAnnual={isAnnual} />
      </div>
    </section>
  )
}

export default Pricing
