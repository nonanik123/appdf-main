import HeroLine1 from '../icons/HeroLine1'
import HeroLine2 from '../icons/HeroLine2'
import HeroLine3 from '../icons/HeroLine3'
import HeroLine4 from '../icons/HeroLine4'
import HeroContent from './HeroContent'

const Hero = () => {
  return (
    <section
      className="hero max-mb:pb-[70px] max-mb:pb-[70px] relative overflow-hidden bg-gray pb-[140px] pt-[230px] dark:bg-dark max-lg:pb-25 max-lg:pt-[160px]"
      id="scene">
      <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 max-lg:hidden">
        <HeroLine1 />
      </div>
      <div className="absolute bottom-0 left-0 w-full max-lg:hidden">
        <HeroLine2 />
      </div>
      <div className="absolute left-1/2 top-0 max-w-[1612px] -translate-x-1/2 lg:hidden">
        <HeroLine3 />
      </div>
      <div className="absolute bottom-0 left-0 w-full lg:hidden">
        <HeroLine4 />
      </div>
      <div className="container">
        <HeroContent />
      </div>
    </section>
  )
}

export default Hero
