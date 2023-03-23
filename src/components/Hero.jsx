import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/cover.png'
import { Book } from '@/components/Book'

const componentThemeConfig = {
  blue: {
    "text-color": "text-blue-600",
    "background-color": "bg-blue-600",
  },
  red: {
    "text-color": "text-red-600",
    "background-color": "bg-red-600",
  }
}

function Testimonial({ componentThemeColor }) {
  const themedConfig = componentThemeConfig[componentThemeColor]
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className={`flex justify-center ${themedConfig['text-color']} lg:justify-start`}>
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-slate-900">
        &#34;Thank you, PPS. You helped me find the right words for my personal statements and helped me match into a really great residency! You even helped to fix my ERAS CV. Thank you! Thank you! Thank you!&#34;
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className={`font-semibold ${themedConfig['text-color']} before:content-['—_']`}>
          Komal S.
        </strong><br/>
        IMG, accepted to family medicine
      </figcaption>
    </figure>
  )
}

export function Hero({ componentThemeColor = "blue" }) {
  const themedConfig = componentThemeConfig[componentThemeColor]
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className={`absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl ${themedConfig['background-color']} text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40`}>
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-80 h-100 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            {/* <Image className="w-full" src={coverImage} alt="" priority /> */}
            <Book className="w-full"/>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial componentThemeColor={componentThemeColor} />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-5xl font-extrabold text-slate-900 sm:text-6xl">
              We help you make the <i>Perfect Impression</i>
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
            Experienced medical writers and physicians help you write excellent application materials for medical school or residency as well as all other types of healthcare professional programs.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#services" color={componentThemeColor}>
                View Our Services
              </Button>
              <Button href="#examples" variant="outline" color={componentThemeColor}>
                Request a Work Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
