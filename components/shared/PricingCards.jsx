'use client'
import { PricingData } from '@/data/data'
import PricingBackground from './PricingBackground'
import PricingCard from './PricingCard'

const PricingCards = ({ isAnnual }) => {
  return (
    <div className="relative md:z-10">
      <PricingBackground />
      <div className="relative flex items-center gap-8 max-lg:flex-col max-md:z-10">
        {PricingData.map((price) => (
          <PricingCard price={price} key={price.id} isAnnual={isAnnual} />
        ))}
      </div>
    </div>
  )
}

export default PricingCards
