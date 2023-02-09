import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import { Categories } from '@/components/Categories'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Perfect Personal Statement
        </title>
        <meta
          name="description"
          content="Perfect Personal Statement"
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Alyson K.',
          role: 'general surgery applicant USIMG (matched)',
        }}
      >
        <p>
          “Before writing my personal statement, my professional writer really got to know me over the phone and e-mail. He spent time looking at my CV/resume and learned all about me with his insightful interview questions. He helped me find the right words to express myself. I really ended up with the perfect personal statement—thanks PPS!”
        </p>
      </Testimonial>
      <Categories/>
      <Testimonial
        id="testimonial-from-tommy-stromaan"
        author={{
          name: 'Alyson K.',
          role: 'general surgery applicant USIMG (matched)',
        }}
      >
        <p>
          “Before writing my personal statement, my professional writer really got to know me over the phone and e-mail. He spent time looking at my CV/resume and learned all about me with his insightful interview questions. He helped me find the right words to express myself. I really ended up with the perfect personal statement—thanks PPS!”
        </p>
      </Testimonial>
      <Resources />
      {/* <Screencasts /> */}
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Matt T.',
          role: 'Internal Medicine Applicant USIMG (matched)',
        }}
      >
        <p>
        "Lance with PPS is a really good listener. He has a lot of experience with personal statement materials and suggested helpful ideas that I never thought of. He helped me better understand my love of internal medicine and helped me put this love into words. Best experience!"
        </p>
      </Testimonial>
      <FreeChapters />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Matt T.',
          role: 'Internal Medicine Applicant USIMG (matched)',
        }}
      >
        <p>
        "Lance with PPS is a really good listener. He has a lot of experience with personal statement materials and suggested helpful ideas that I never thought of. He helped me better understand my love of internal medicine and helped me put this love into words. Best experience!"
        </p>
      </Testimonial>
      {/* <Testimonials /> */}
      <Author />
      <Footer />
    </>
  )
}
