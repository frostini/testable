import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Pattern } from '@/components/Pattern'
import { SectionHeading } from '@/components/SectionHeading'
import { componentThemeConfig } from '@/lib'

export function FreeChapters({ componentThemeColor = "blue" }) {
const themedConfig = componentThemeConfig[componentThemeColor]
  return (
    <section
      id="work-sample"
      aria-label="Free preview"
      className={`scroll-mt-14 ${themedConfig['background-color']} sm:scroll-mt-32`}
    >
      <div className="overflow-hidden lg:relative">
        <Container
          size="md"
          className="relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32"
        >
          <Pattern className="absolute -top-32 left-0 w-full sm:left-3/4 sm:-top-5 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3" />
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
              Get the <br/> Perfect Samples
            </h2>
            <p className={`mt-4 text-lg tracking-tight ${themedConfig['light-text-color']}`}>
              Enter your email address and we&#39;ll send you a couple of samples from past customers that obtained their <i>Perfect Outcome</i>.
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight text-white">
              Request example personal statements{' '}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" />
              </div>
              <Button
                type="submit"
                color="whiteRed"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Request Free Sample
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </section>
  )
}
