import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
        Our writing firm specializes in statements for health professional institutions such as medical, dental, pharmacy, nursing, and physician assistant schools, as well as residency and fellowship placement.
        </p>
        <p className="mt-4">
        We maintain entirely confidential services and employ only the most highly skilled professional writers. At Perfect Personal Statement, we believe in the synergism elicited by fine physicians and fine writers working together to give you an exemplary product.
        </p>
        <p className="mt-4">
        Many institutions refer to personal statements in an effort to better appreciate an applicant&#39;s motivations and expressive ability. Unfortunately, applicants often neglect this very significant component to the admissions process. Don&#39;t make the same mistake!
        </p>
        <p className="mt-4">
        The highly trained writers and physicians at the Perfect Personal Statement help you to ensure that your statement is thoughtful, eloquent, and properly reflects your personal, professional, and academic strengths.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'We try to offer the lowest rates in the business in order for you to receive a quality product that is both refined and affordable',
            'We can share sample works from successful past client for reference if needed',
            ' If you have any questions before subscribing to our service, you may e-mail us, and you will be contacted by a customer service representative',
            'All materials are prepared in about 10 business days and oftentimes much faster',
            'Rush-ordered services are available if needed',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        Our team at Perfect Personal Statement wishes you the best in all your endeavors and is standing by ready to help you make the <i>Perfect Impression</i>. 
        </p>
        <p className="mt-10">
          <Link
            href="#services"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            View Perfect Personal Statement Services {' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
