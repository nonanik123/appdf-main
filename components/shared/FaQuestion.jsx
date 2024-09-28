'use client'
import { FAQData } from '@/data/data'
import { useState } from 'react'
import FaqItem from './FaqItem'

const FaQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  const generalFaq = FAQData.filter((faq) => faq.type.includes('general'))
  return (
    <div className="[&>*:not(:last-child)]:mb-5">
      {generalFaq.map((faq) => (
        <FaqItem
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          isOpen={activeIndex === faq.id}
          onClick={() => handleItemClick(faq.id)}
        />
      ))}
    </div>
  )
}

export default FaQuestion
