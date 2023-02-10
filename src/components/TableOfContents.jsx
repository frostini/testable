import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  '1. Discovery': {
    'Within one business day of receiving your payment, we will e-mail you a list of potential interview topics and pair you with a professional writer and physician editor. We will also request any additional information that we may need from you. Your professional writer and physician editor will contact you via e-mail within 24 to 36 hours.*': 1,
    '*If you order the rush-order service, this entire process is expedited': 43
  },
  '2. Production': {
    'A professional writer with a graduate degree in creative writing, English, or journalism will set up an interview time with you and interview you over the phone. Depending on your choice of service, your professional writer will either write or rewrite (edit) your personal statement or other application materials.': 21,
    'Examples of these other materials are your CV, letter of recommendation, letter of intent, and so forth.': 33
  },
  '3. Revision': {
    'You may then request one set of focused revisions via e-mail, or your writer will solicit one set of focused revisions over the phone.': 50,
  },
  '4. Perfection': {
    'Your writer will finalize your personal statement or other application materials, and your physician editor will check them for medical accuracy.': 82,
  },
}

export function TableOfContents() {
  return (
    <section
      id="getting-started"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Process
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Our Creative Process
        </p>
        <p className="mt-4 text-3xl tracking-tight text-slate-700">
          Here is the road to Personal Statement Perfection
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-blue-600">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
