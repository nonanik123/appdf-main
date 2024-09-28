import Members from './Members'
import TeamBackground from './TeamBackground'

const TeamMembers = () => {
  return (
    <section className="bg-white pb-[170px] pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:pb-25 max-md:pt-20">
      <div className="container">
        <div className="relative z-10 mx-auto mb-12 max-w-[475px] text-center">
          <p className="section-tagline">Our Team</p>
          <h2>Our leading, strong and creative team</h2>
        </div>

        <div className="relative z-10">
          <TeamBackground />
          <Members />
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
