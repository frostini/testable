import Image from 'next/image'
import Link from 'next/link'

import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/author.png'
import { componentThemeConfig } from '@/lib'


export function Author({ componentThemeColor = "blue" }) {
  const themedConfig = componentThemeConfig[componentThemeColor]

  return (
    <section
      id="contact"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-slate-50 pt-px sm:rounded-6xl">
          {/* <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-slate-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={authorImage}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div> */}
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <SectionHeading componentThemeColor={componentThemeColor} number="5" id="author-title">
              Contact Us
            </SectionHeading>
            <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              <span className={`block ${themedConfig['text-color']}`}>Perfect Personal Statement</span>is ready to help you
            </p>

    {/* <div className="bg-white"> */}
      <div className="mx-auto max-w-7xl py-16 px-6 lg:py-24 lg:px-8">
        <div className="divide-gray-200">
          {/* <div className="lg:grid lg:grid-cols-3 lg:gap-4 sm:gap-x-12"> */}
            {/* <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0"> */}
              {/* <div className="mt-10 lg:mt-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Address</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Address Line 1</dt>
                    <dd>PO BOX 211354</dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Address Line 2</dt>
                    <dd>Chula Vista, CA 91921</dd>
                  </div>
                </dl>
              </div> */}
              <div className="mt-10 lg:mt-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Email</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>customer_service@perfect-personal-statement.com</dd>
                  </div>
                </dl>
              </div>
              {/* <div className="mt-10 lg:mt-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Phone Number</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Phone Number</dt>
                    <dd>+1 (858) 777-9743</dd>
                  </div>
                </dl>
              </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    {/* </div> */}




          </div>
        </div>
      </div>
    </section>
  )
}
