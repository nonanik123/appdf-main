import dataDark1 from '@/public/images/home-4-img/data1-dark.png'
import data1 from '@/public/images/home-4-img/data1.png'
import dataDark2 from '@/public/images/home-4-img/data2-dark.png'
import data2 from '@/public/images/home-4-img/data2.png'
import dataDark3 from '@/public/images/home-4-img/data3-dark.png'
import data3 from '@/public/images/home-4-img/data3.png'
import Image from 'next/image'

const Feature = () => {
  const userManageCard = [
    {
      id: 1,
      img: data1,
      darkImg: dataDark1,
      title: 'Manage Project Finances',
      description:
        'Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus nibh tristique sit felis.',
    },
    {
      id: 2,
      img: data2,
      darkImg: dataDark2,
      title: 'Streamlined Data Processes',
      description:
        'Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus nibh tristique sit felis.',
    },
    {
      id: 3,
      img: data3,
      darkImg: dataDark3,
      title: 'Understand User Behavior',
      description:
        'Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus nibh tristique sit felis.',
    },
  ]

  return (
    <section className="container pb-[150px]">
      <div className="mx-auto grid grid-cols-1 items-center justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {userManageCard?.map((userCard) => (
          <div
            key={userCard.id}
            className="hover:dark:border-borderColour-dark relative max-w-[402px] rounded-medium border border-solid border-transparent bg-white p-8 shadow-nav transition-colors hover:transition-colors dark:bg-dark-200 max-lg:p-5">
            <figure>
              <Image
                src={userCard.img}
                alt="User ManageMent Light Image "
                className="inline-block h-full w-full dark:hidden"
              />
              <Image
                src={userCard.darkImg}
                alt="User ManageMent Dark Image "
                className="hidden h-full w-full dark:inline-block"
              />
            </figure>
            <figcaption>
              <h3 className="mb-2.5 mt-10 max-w-[70%] leading-8">{userCard.title}</h3>
              <p>{userCard.description}</p>
            </figcaption>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feature
