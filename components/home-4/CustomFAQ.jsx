'use client'
import { FAQData } from '@/data/data'
import { useState } from 'react'
import FaqItem from '../shared/FaqItem'

const CustomFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="relative pb-150  max-md:overflow-hidden">
      <div className="container relative">
        <div className=" mx-auto max-w-[830px]">
          <div className="[&>*:not(:last-child)]:mb-5">
            {FAQData.slice(0, 3)?.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === faq.id}
                onClick={() => handleItemClick(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomFAQ
