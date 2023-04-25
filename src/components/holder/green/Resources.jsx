import Image from 'next/image'
import { Product } from '@/components/Product'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import { PayButton } from '@/components/PayButton'
import { componentThemeConfig } from '@/lib'

const resources = [
  {
    amount: 379,
    currency: 'USD',
    price: '$379 USD',
    title: 'Law School Personal Statement or Essay',
    description: 'Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 1200 words. Please note that law school statements can be challenging to write. We recommend reviewing our Terms of Use and Disclaimer before ordering.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    amount: 329,
    currency: 'USD',
    price: '$329 USD',
    title: 'Law School Personal Statement or Essay - Rewrite',
    description: 'Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 1200 words. Please note that law school statements can be challenging to write. We recommend reviewing our Terms of Use and Disclaimer before ordering.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  }, {
    amount: 339,
    currency: 'USD',
    price: '$339 USD',
    title: 'MBA Personal Statement or Essay',
    description: 'Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 1200 words.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  }, {
    amount: 279,
    currency: 'USD',
    price: '$279 USD',
    title: 'MBA Personal Statement or Essay - Rewrite',
    description: 'Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 1200 words.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  }, {
    amount: 319,
    currency: 'USD',
    price: '$319 USD',
    title: 'Graduate School Personal Statement or Essay',
    description: 'Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 1200 words.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },  {
    amount: 279,
    currency: 'USD',
    price: '$279 USD',
    title: 'MBA Personal Statement or Essay - Rewrite',
    description: 'Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 1200 words.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },{
    amount: 199,
    currency: 'USD',
    price: '$199 USD',
    title: 'Resume/CV - Rewrite',
    description:
    "Includes one interview, initial draft, follow-up interview, and revision if desired.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    }
  }, {
    amount: 199,
    currency: 'USD',
    price: '$199 USD',
    title: 'Personal Statement',
    description:
    "Includes one interview, initial draft, follow-up interview, and revision if desired. Limited to 550 words. Please note that we write letters of recommendation on behalf of third parties. For example, if an employer, teacher, or professor asks you to write your own letter of recommendation that they plan to review and sign.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    }
  },
  {
    amount: 149,
    currency: 'USD',
    price: '$149 USD',
    title: 'Rush Order Add-on',
    description:
    "All of our services are available with an expedited turn around of 48 hours with this Rush Order Add-on. Please note that any service you would like to add a rush order to requires the purchase of a corresponding Rush Order Add-on.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    }
  },
]

export function Resources({componentThemeColor = "blue"}) {
  const themedConfig = componentThemeConfig[componentThemeColor]
  return (
    <section
      id="pricing"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading componentThemeColor={componentThemeColor} number="3" id="resources-title">
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
                <div className="mt-8 flex gap-4 justify-center z-0">
                  <PayButton
                    id={`pay-${resource.amount}`}
                    description={resource.title}
                    amount={resource.amount}
                    currency={resource.currency}
                    showSpinner={false}
                    style= {{
                      shape: 'pill',
                      color: 'gold',
                      layout: 'vertical',
                      label: 'buynow'
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
