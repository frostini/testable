import Head from 'next/head'
import { NavBar } from '@/components/NavBar'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { TableOfContents } from '@/components/TableOfContents'
import { Categories } from '@/components/Categories'
import { Resources } from '@/components/Resources'
import { Testimonial } from '@/components/Testimonial'
import { FreeChapters } from '@/components/FreeChapters'
import { Author } from '@/components/Author'
import { OtherServices } from '@/components/OtherServices'
import { Footer } from '@/components/Footer'

export default function Home() {
  const componentThemeColor = "gold"
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
      <Hero componentThemeColor={componentThemeColor} />
      <Introduction componentThemeColor={componentThemeColor} />
      <NavBar componentThemeColor={componentThemeColor} />
      <TableOfContents componentThemeColor={componentThemeColor} />
      <Testimonial
        componentThemeColor={componentThemeColor}
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Alyson K.',
          role: 'general surgery applicant USIMG (matched)',
        }}
      >
        <p>
        &#34;Before writing my personal statement, my professional writer really got to know me over the phone and e-mail. He spent time looking at my CV/resume and learned all about me with his insightful interview questions. He helped me find the right words to express myself. I really ended up with the perfect personal statement—thanks PPS!&#34;
        </p>
      </Testimonial>
      <Categories componentThemeColor={componentThemeColor}/>
      <Testimonial
        componentThemeColor={componentThemeColor}
        id="testimonial-from-tommy-stromaan"
        author={{
          name: 'Alyson K.',
          role: 'general surgery applicant USIMG (matched)',
        }}
      >
        <p>
        &#34;Before writing my personal statement, my professional writer really got to know me over the phone and e-mail. He spent time looking at my CV/resume and learned all about me with his insightful interview questions. He helped me find the right words to express myself. I really ended up with the perfect personal statement—thanks PPS!&#34;
        </p>
      </Testimonial>
      <Resources componentThemeColor={componentThemeColor}/>
      <Testimonial
        componentThemeColor={componentThemeColor}
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Matt T.',
          role: 'Internal Medicine Applicant USIMG (matched)',
        }}
      >
        <p>
        &#34;Lance with PPS is a really good listener. He has a lot of experience with personal statement materials and suggested helpful ideas that I never thought of. He helped me better understand my love of internal medicine and helped me put this love into words. Best experience!&#34;
        </p>
      </Testimonial>
      <FreeChapters componentThemeColor={componentThemeColor}/>
      <Testimonial
        componentThemeColor={componentThemeColor}
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Matt T.',
          role: 'Internal Medicine Applicant USIMG (matched)',
        }}
      >
        <p>
        &#34;Lance with PPS is a really good listener. He has a lot of experience with personal statement materials and suggested helpful ideas that I never thought of. He helped me better understand my love of internal medicine and helped me put this love into words. Best experience!&#34;
        </p>
      </Testimonial>
      <Author componentThemeColor={componentThemeColor}/>
      <OtherServices componentThemeColor={componentThemeColor}/>
      <Footer />
    </>
  )
}
