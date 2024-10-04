'use client'
import { fadeUpAnimation } from '@/data/animation'
import { FAQData } from '@/data/data'
import useWhileInView from '@/hooks/useWhileInView'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import FaqItem from '../shared/FaqItem'

const FaqFilter = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  const categories = ['general', 'changelog', 'terms']
  const [filterData, setFilterData] = useState([...FAQData])
  const [active, setActive] = useState(0)
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  useEffect(() => {
    const generalFaq = FAQData.filter((faq) => faq.type.includes('general'))
    setFilterData(generalFaq)
  }, [])

  const handleClick = (type) => {
    const data = FAQData.filter((item) => item.type.includes(type))
    setFilterData(data)
  }
  return (
    <motion.div
      className="mx-auto max-w-[850px]"
      ref={ref}
      initial="initial"
      animate={controlAnimation}
      variants={fadeUpAnimation}>
      <ul className=" faq-tabs mx-auto mb-15 flex w-fit max-w-[530px] items-center border-b-2 border-white dark:border-borderColor-dark max-md:flex-col max-md:border-none">
        {categories?.map((btn, index) => (
          <li className={index === active ? 'tabActive group' : 'group'} key={btn}>
            <button
              className=" relative -mb-0.5 px-7 py-4 text-center text-xl font-medium capitalize after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-full after:origin-right after:-translate-x-1/2 after:scale-x-0  after:bg-paragraph after:transition-transform after:duration-500 group-[.tabActive]:after:origin-left group-[.tabActive]:after:scale-x-100 dark:after:bg-white"
              onClick={() => {
                handleClick(btn)
                setActive(index)
              }}>
              {btn}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        <div className="tab-pane tabActive">
          <div className="[&>*:not(:last-child)]:mb-5">
            {filterData.map((faq) => (
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
    </motion.div>
  )
}

export default FaqFilter
