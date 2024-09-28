import FaQuestion from './FaQuestion'
import FaqBackground from './FaqBackground'

const Faq = () => {
  return (
    <section className="relative pb-150  max-md:overflow-hidden">
      <div className="container relative">
        <FaqBackground />
        <div className="mx-auto max-w-[830px]">
          <div className="text-center">
            <p className="section-tagline mb-3">S.S.S.</p>
            <h2 className="mb-12">
              Sıkça Sorulan <br />
              Sorular
            </h2>
          </div>
          <FaQuestion />
        </div>
      </div>
    </section>
  )
}

export default Faq
