import React from 'react'

const Main = ({isBlack}) => {
  return (
    <div>

    <section className="py-12 sm:py-16 lg:pb-20 xl:pb-24" id="intro">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="flex flex-col items-center lg:flex-row gap-y-12 lg:gap-x-16">
          <div className="text-center lg:text-left lg:flex-1 lg:min-w-0">
            <h1
              className={`text-6xl font-bold leading-none tracking-tighter uppercase sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl ${isBlack?'text-white':'text-primary-950'}`}>
              <span className="mr-4 font-splineSans text-primary-500">Attend live</span> classes every week
            </h1>
            <h2
              className={`max-w-lg mx-auto mt-5 text-lg font-normal leading-8 ${isBlack?'text-white':'text-gray-600'} lg:max-w-none lg:mx-0 sm:leading-8 2xl:leading-9 sm:text-xl 2xl:text-2xl`}>
              Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp
              Group for less than
              a cup of coffee.
            </h2>

            <div className="flex flex-col items-center gap-6 mt-8 lg:items-start xl:flex-row xl:items-center lg:mt-10">
              <a href="https://bit.ly/30dc-aryan" title="" target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-150 rounded-full shadow-sm bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                role="button">
                Join 24/7 Whatsapp + discord for $5/month
              </a>
            </div>
          </div>

          <div className="w-full lg:max-w-lg lg:shrink-0 2xl:max-w-xl">
            <img className="w-full"
              src="https://github.com/singh1aryan/nextjs-prisma-sql/assets/31454667/9009ac7b-b0fb-4083-9f22-193e56c10f1c"
              alt=""/>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-12 gap-y-8 gap-x-16 sm:mt-16 lg:mt-20">
          <div className="flex items-center gap-3">
            <img className="w-8 h-8 shrink-0" src="images/icon-guides.svg" alt=""/>
            <h3 className={`text-lg font-medium ${isBlack?'text-white':'text-gray-950'}`}>
              5+ Guides for Free
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-8 h-8 shrink-0" src="images/icon-courses.svg" alt=""/>
            <h3 className={`text-lg font-medium ${isBlack?'text-white':'text-gray-950'}`}>
              Exclusive Courses & Projects
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-8 h-8 shrink-0" src="images/icon-whatsapp.svg" alt=""/>
            <h3 className={`text-lg font-medium ${isBlack?'text-white':'text-gray-950'}`}>
              24/7 WhatsApp Support Group
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-8 h-8 shrink-0" src="images/icon-sessions.svg" alt=""/>
            <h3 className={`text-lg font-medium ${isBlack?'text-white':'text-gray-950'}`}>
              1:1 Free Session
            </h3>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 xl:py-24 lg:py-20" id="testimonials">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div
          className="grid max-w-lg grid-cols-1 mx-auto text-center lg:grid-cols-3 gap-y-16 lg:gap-x-16 lg:max-w-5xl 2xl:max-w-7xl">
          <div className="space-y-4 lg:space-y-6">
            <div
              className="w-24 h-24 mx-auto overflow-hidden transition-all duration-200 rounded-full group hover:shadow-lg hover:-translate-y-2 ring-1 ring-gray-100">
              <img className="object-cover transition-all duration-200 group-hover:scale-125"
                src="images/avatars/avatar-aryan.webp" alt=""/>
            </div>
            <blockquote>
              <p className={`text-base font-normal leading-7 lg:text-lg lg:leading-8 ${isBlack?'text-white':'text-gray-950'}`}>
                "This community has been a game-changer for my career. The exclusive courses and personalized guidance
                from expert
                mentors have helped me take my coding skills to the next level."
              </p>
            </blockquote>
            <div>
              <p className={`text-sm font-bold sm:text-base ${isBlack?'text-white':'text-gray-950'}`}>
                Aryan Singh
              </p>
              <p className={`mt-1 text-sm font-normal ${isBlack?'text-white':'text-gray-600'} sm:text-base`}>
                SWE at Google
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div
              className="w-24 h-24 mx-auto overflow-hidden transition-all duration-200 rounded-full group hover:shadow-lg hover:-translate-y-2 ring-1 ring-gray-100">
              <img className="object-cover transition-all duration-200 group-hover:scale-125"
                src="images/avatars/avatar-kevin.webp" alt=""/>
            </div>
            <blockquote>
              <p className={`text-base font-normal leading-7 lg:text-lg lg:leading-8 ${isBlack?'text-white':'text-gray-950'}`}>
                "The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating
                on open-source
                projects has been a great way to build my portfolio. I highly recommend this community."
              </p>
            </blockquote>
            <div>
              <p className={`text-sm font-bold sm:text-base ${isBlack?'text-white':'text-gray-950'}`}>
                Kevin Smith
              </p>
              <p className={`mt-1 text-sm font-normal ${isBlack?'text-white':'text-gray-600'} sm:text-base`}>
                SWE at Tesla
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div
              className="w-24 h-24 mx-auto overflow-hidden transition-all duration-200 rounded-full group hover:shadow-lg hover:-translate-y-2 ring-1 ring-gray-100">
              <img className="object-cover transition-all duration-200 group-hover:scale-125"
                src="images/avatars/avatar-umang.webp" alt=""/>
            </div>
            <blockquote>
              <p className={`text-base font-normal leading-7 lg:text-lg lg:leading-8 ${isBlack?'text-white':'text-gray-950'}`}>
                "Joining this community was one of the best decisions I've made for my career. The 24/7 WhatsApp group
                has been an incredible resource for networking and collaboration. I highly recommend this community"
              </p>
            </blockquote>
            <div>
              <p className={`text-sm font-bold sm:text-base ${isBlack?'text-white':'text-gray-950'}`}>
                Umang Chaudhary
              </p>
              <p className={`mt-1 text-sm font-normal ${isBlack?'text-white':'text-gray-600'} sm:text-base`}>
                SWE at Tiktok
              </p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
              <img className="w-6 h-6" src="images/icon-star.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-12 pb-1 sm:pt-16 xl:pt-24 lg:pt-20" id="pricing">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="max-w-lg mx-auto text-center lg:max-w-3xl">
          <h2 className={`text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl ${isBlack?'text-white':'text-gray-950'}`}>
            Simple no-tricks pricing
          </h2>
          <p
            className={`max-w-xl mx-auto mt-5 text-base font-normal leading-7 ${isBlack?'text-white':'text-gray-600'} lg:leading-9 lg:text-xl sm:text-lg sm:leading-8`}>
            Everything you need to grow 10x for less than a coffee.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-12 rounded-3xl ring-1 ring-gray-200 sm:mt-16 lg:flex lg:max-w-5xl">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className={`text-xl font-bold tracking-tight ${isBlack?'text-white':'text-gray-900'} sm:text-2xl`}>
              Premium Elite Subscription
            </h3>
            <p className={`mt-4 text-base leading-7 ${isBlack?'text-white':'text-gray-600'} lg:mt-6`}>
              Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp
              Group for less than a cup of coffee.
            </p>

            <div className="flex items-center mt-10 gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-primary-600">
                What's included
              </h4>
              <div className="flex-auto h-px bg-gray-200"></div>
            </div>

            <ul role="list"
              className={`grid grid-cols-1 gap-4 mt-6 text-sm leading-6 ${isBlack?'text-white':'text-gray-600'} sm:grid-cols-2 sm:gap-6`}>
              <li className="flex gap-x-3">
                <img className="flex-none w-5 h-5 shrink-0" src="images/icon-check.svg" alt=""/>
                Expert Mentors
              </li>

              <li className="flex gap-x-3">
                <img className="flex-none w-5 h-5 shrink-0" src="images/icon-check.svg" alt=""/>
                Exclusive Courses
              </li>

              <li className="flex gap-x-3">
                <img className="flex-none w-5 h-5 shrink-0" src="images/icon-check.svg" alt=""/>
                Networking & Collaboration
              </li>

              <li className="flex gap-x-3">
                <img className="flex-none w-5 h-5 shrink-0" src="images/icon-check.svg" alt=""/>
                Career guidance
              </li>
            </ul>
          </div>

          <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              className="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div className="max-w-xs px-8 mx-auto">
                <p className="text-base font-semibold text-gray-600">
                  Less than a cup of coffee
                </p>
                <p className="flex items-center justify-center mt-6 gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    $5
                  </span>
                  <strike className="text-4xl font-semibold leading-6 tracking-wide text-gray-400">
                    $1000
                  </strike>
                </p>
                <div className="w-full mt-10">
                  <a href="https://nas.io/30dayscoding" target="_blank" rel="noreferrer"
                    className="w-full px-8 py-4 text-base font-semibold text-white transition-all duration-150 rounded-full shadow-sm bg-primary-500 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
                    Join Community
                  </a>
                </div>

                <div className="flex flex-col items-center mt-10 gap-y-3 gap-x-4">
                  <div className="flex -space-x-2 overflow-hidden transition-all duration-150 isolate hover:-space-x-1">
                    <img className="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-aryan.webp" alt=""/>
                    <img className="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-kevin.webp" alt=""/>
                    <img className="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-umang.webp" alt=""/>
                    <img className="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-1.png" alt=""/>
                    <img className="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-2.png" alt=""/>
                  </div>
                  <span className="text-sm font-medium text-gray-950">
                    100+ Active Members
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="py-12 sm:py-16 xl:py-24 lg:py-20" id="features">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="max-w-lg mx-auto text-center lg:max-w-3xl">
          <h4 className={`text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl 2xl:text-6xl ${isBlack?'text-white':'text-gray-950'}`}>
            Everything you need in <span className="inline sm:block">one community</span>
          </h4>
          <p
            className={`max-w-xl mx-auto mt-5 text-base font-normal leading-7 ${isBlack?'text-white':'text-gray-600'} lg:leading-9 lg:text-xl sm:text-lg sm:leading-8`}>
            Unleashing your digital potential for lasting success
          </p>
        </div>

        <div
          className="grid max-w-md grid-cols-1 mx-auto mt-8 text-center gap-y-12 lg:grid-cols-3 lg:gap-x-16 xl:gap-x-24 sm:mt-12 lg:mt-16 lg:max-w-5xl 2xl:max-w-6xl">
          <div className="group bg-white p-3 rounded-md">
            <img className="h-auto mx-auto transition-all duration-200 w-60 xl:max-w-xs lg:group-hover:-translate-y-3"
              src="images/illustration-mentors.svg" alt=""/>
            <h5 className="mt-4 text-xl font-bold tracking-wide uppercase sm:text-2xl sm:mt-6 lg:mt-8 text-gray-950">
              Expert Mentors
            </h5>
            <p className="mt-2 text-base font-normal leading-7 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8">
              Get personalized guidance from expert mentors to take your coding skills to the next level.
            </p>
          </div>

          <div className="group bg-white p-3 rounded-md">
            <img className="h-auto mx-auto transition-all duration-200 w-60 xl:max-w-xs lg:group-hover:-translate-y-3"
              src="images/illustration-networking.svg" alt=""/>
            <h5 className="mt-4 text-xl font-bold tracking-wide uppercase sm:text-2xl sm:mt-6 lg:mt-8 text-gray-950">
              Networking
            </h5>
            <p className="mt-2 text-base font-normal leading-7 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8">
              Connect with like-minded coders from around the world and collaborate on exciting projects.
            </p>
          </div>

          <div className="group bg-white p-3 rounded-md">
            <img className="h-auto mx-auto transition-all duration-200 w-60 xl:max-w-xs lg:group-hover:-translate-y-3"
              src="images/illustration-courses.svg" alt=""/>
            <h5 className="mt-4 text-xl font-bold tracking-wide uppercase sm:text-2xl sm:mt-6 lg:mt-8 text-gray-950">
              Courses
            </h5>
            <p className="mt-2 text-base font-normal leading-7 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8">
              Exclusive courses in Full Stack, AI, Blockchain, and more to help you stay ahead of the curve.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 sm:py-16 xl:py-24 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 ">
          <img className="w-auto h-9 sm:h-10 lg:h-12 bg-white p-2 rounded-md" src="images/company-logos/adobe.svg" alt=""/>
          <img className="w-auto h-9 sm:h-10 lg:h-12 bg-white p-2 rounded-md" src="images/company-logos/airbnb.svg" alt=""/>
          <img className="w-auto h-9 sm:h-10 lg:h-12 bg-white p-2 rounded-md" src="images/company-logos/figma.svg" alt=""/>
          <img className="w-auto h-9 sm:h-10 lg:h-12 bg-white p-2 rounded-md" src="images/company-logos/framer.svg" alt=""/>
          <img className="w-auto h-9 sm:h-10 lg:h-12 bg-white p-2 rounded-md" src="images/company-logos/google.svg" alt=""/>
          <img className="w-auto h-9 sm:h-10 lg:h-12 bg-white p-2 rounded-md" src="images/company-logos/dropbox.svg" alt=""/>
        </div>
      </div>
    </section>

    <section className="py-12  sm:py-16 xl:py-24 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div
          className="grid grid-cols-1 group lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:items-center lg:max-w-5xl lg:mx-auto">
          <div className="text-center lg:text-left">
            <div className="max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <h2 className={`text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl ${isBlack?'text-white':'text-gray-950'}`}>
                Gain a competitive edge in job market
              </h2>
              <p
                className={`mt-5 text-base font-normal leading-7 ${isBlack?'text-white':'text-gray-600'} lg:leading-9 lg:text-xl sm:text-lg sm:leading-8`}>
                Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp
                Group for less than a cup of coffee.
              </p>
            </div>

            <p className="mt-8 text-sm font-bold tracking-widest uppercase sm:text-base text-primary-600 sm:mt-10">
              what you'll get
            </p>

            <ul
              className={`flex flex-col items-center mt-4 text-base sm:mt-6 sm:text-lg lg:text-xl ${isBlack?'text-white':'text-gray-950'} gap-y-6 sm:flex-row sm:gap-x-8 sm:max-w-md sm:mx-auto sm:items-start lg:flex-col lg:items-start lg:mx-0 lg:max-w-none`}>
              <li className="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                <img className="w-6 h-6 shrink-0 " src="images/icon-guides-2.svg" alt=""/>
                Comprehensive guides, projects, & courses
              </li>

              <li className="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                <img className="w-6 h-6 shrink-0" src="images/icon-job.svg" alt=""/>
                Exclusive job + internship postings
              </li>

              <li className="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                <img className="w-6 h-6 shrink-0" src="images/icon-tips.svg" alt=""/>
                1:1 Career guidance & mentorship
              </li>
            </ul>
          </div>

          <div>
            <img
              className="h-auto bg-white rounded-3xl mx-auto transition-all duration-200 w-60 sm:w-full sm:max-w-xs lg:max-w-none group-hover:rotate-6"
              src="images/illustration-job.svg" alt=""/>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Main
