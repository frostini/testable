import Link from 'next/link'
import { Container } from '@/components/Container'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { SectionHeading } from '@/components/SectionHeading'
import { componentThemeConfig } from '@/lib'

const features = [
  {
    name: 'Law School',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'MBA',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Engineering',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium.',
    href: '#',
    icon: TrashIcon,
  },
  {
    name: 'Sciences',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Social Sciences',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Humanities',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium.',
    href: '#',
    icon: TrashIcon,
  },
]

export function Categories({ componentThemeColor = "blue" }) {
  const themedConfig = componentThemeConfig[componentThemeColor]

  return (
    <section
      id="programs"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading componentThemeColor={componentThemeColor} number="2" id="program  s-title">
          Programs Available
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
        We write for all types of graduate school programs
        </p>
      </Container>
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
      <Container size="lg" className="mt-16">
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className={`text-base font-semibold leading-7 ${themedConfig['text-color']}`}>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
      </div>
    </Container>
    <Container size='lg'>
      <p className="mt-10">
        <Link
          href="#pricing"
          className={`text-base font-medium ${themedConfig['text-color']} ${themedConfig['dark-text-hover']}`}
        >
          View Perfect Personal Statement Pricing {' '}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
    </Container>
    </section>
  )
}
