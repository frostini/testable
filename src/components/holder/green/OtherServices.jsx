import Image from 'next/image'
import { Product } from '@/components/Product'
import { OtherProduct } from '@/components/OtherProduct'
import { OtherSite } from '@/components/OtherSite'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import { componentThemeConfig } from '@/lib'

const resources = [{
    title: 'College',
    path: '/college',
    callToAction: 'View PPS for College',
    theme:'blue',

  },{
    title: 'Medicine',
    path: '/',
    callToAction: 'View PPS for Medicine',
    theme:'gold',
  }]

export function OtherServices({componentThemeColor = "blue"}) {
  const themedConfig = componentThemeConfig[componentThemeColor]
  return (
    <section
      id="pricing"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading componentThemeColor={componentThemeColor}  id="resources-title">
          Other Services
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        Don&apos;t see what you are looking for? Maybe one of our other services can help!
        </p>
      </Container>
      <Container className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 lg:grid-cols-2"
        >
          {resources.map((resource) => (
            <li
              key={resource.title}
              className="flex"
            >
              <OtherSite
                title={resource.title}
                textColor={componentThemeConfig[resource.theme]['text-color']}
                themeColor={resource.theme}
                callToAction={resource.callToAction}
                path={resource.path}
                
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
