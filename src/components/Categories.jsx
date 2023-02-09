import Link from 'next/link'
import { Container } from '@/components/Container'
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'
import { SectionHeading } from '@/components/SectionHeading'

const features = [
  {
    name: 'Medical School',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Residency',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Fellowship',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium.',
    href: '#',
    icon: TrashIcon,
  },
  {
    name: 'Dental School',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Dental Residency',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Physician Assistant',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium.',
    href: '#',
    icon: TrashIcon,
  },  
  {
    name: 'Nursing',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Pharmacy',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Physical Therapy',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium.',
    href: '#',
    icon: TrashIcon,
  },  
]

export function Categories() {
  return (
    <section
      id="programs"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="program  s-title">
          Programs
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Our Creative Process
        </p>
        <p className="mt-4 text-3xl tracking-tight text-slate-700">
          Here is the road to Personal Statement Perfection
        </p>
      </Container>
      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8"> */}
      <Container size="lg" className="mt-16">
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-blue-600">
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
          href="#services"
          className="text-base font-medium text-blue-600 hover:text-blue-800"
        >
          View Perfect Personal Statement Pricing {' '}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </p>
    </Container>
    </section>
  )
}
