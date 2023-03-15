import Image from 'next/image'
import { Product } from '@/components/Product'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'

const resources = [
  {
    price: '$339 USD',
    title: 'Personal Statement Writing',
    description:
      'Includes one interview, initial draft, follow-up interview, and revision if desired. Each additional statement costs $159.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    price: '$465 USD',
    title: 'Personal Statement Writing Rush Order',
    description:
      'Includes one interview, initial draft, follow-up interview, and revision if desired. DONE IN 48 HOURS!',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    price: '$289 USD',
    title: 'Personal Statement Edit',
    description:
      "Includes one clarification interview, initial draft, follow-up interview, and revision if desired.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function Resources() {
  return (
    <section
      id="pricing"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Pricing
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Invest in your future with the Perfect Personal Satement service suite
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-400/20"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12"
            >
              <Product 
                name={resource.title}
                price={resource.price}  
              />
              <div>
                <p className="mt-2 text-sm text-slate-600">
                  {resource.description}
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                  <Button href="#services" color="blue">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
