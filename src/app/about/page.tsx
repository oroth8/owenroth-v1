import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  // TwitterIcon,
  UnsplashIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Owen Roth. Happily dedicated to all things tech and an active lifestyle.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I’m Owen Roth. Happily dedicated to all things tech and an active
            lifestyle.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Born and raised in the bustling heart of Chicago, my story has
              been one of passion, dedication, and continuous evolution. As a
              proud alumnus of New Trier High School, my early years were
              characterized by a deep involvement in sports. Lacrosse became my
              game of choice, and as a Long Stick Midfielder, I carried my
              prowess to DePauw University. However, the call of a bigger stage
              led me to transfer to Wisconsin Madison, where I not only
              continued my lacrosse journey but also made a significant mark.
              Competing at the club level, I contributed to the team clinching
              several Big 10 championships and took on the role of the defensive
              captain, leading from the front.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              College also marked a pivotal moment in my personal journey. In my
              senior year, inspired by tales of valor and dedication, I decided
              to pursue the challenging path of becoming a Navy SEAL.
              Post-graduation, I immersed myself in training, working part-time
              in the restaurant sector, donning multiple hats from bartending to
              general management. In 2018, I took the plunge, enlisting in the
              Navy. My commitment and resilience took me through basic training
              and the demanding courses of BUD/s Prep school. While I reached
              the second phase of BUD/S, a setback saw me part ways with my Navy
              dream.
            </p>
            <p>
              Life, however, had a different plan in store. Leveraging my
              analytical mindset and fascination for technology, I took the tech
              plunge at Northwestern University's web development bootcamp. This
              foray into the digital realm opened up the world of web
              development, and soon, I was freelancing, creating digital
              solutions for various clients. My skills landed me a role at
              Workforce.com in 2021 as a junior software developer. But the
              journey didn't stop there. I transitioned to Launchpad Lab, where
              I currently contribute as a software developer, specializing in
              Ruby and JavaScript frameworks. While my professional life orbits
              around backend development and full-stack applications, my
              personal time has a diverse spread.
            </p>
            <p>
              Fitness remains a constant anchor. From running marathons to
              building a personalized strength training gym on my Chicago
              rooftop, the adrenaline rush keeps me going. Winters often find me
              carving through the snowy slopes in Steamboat, Colorado, with an
              ambition of clocking in around 30 ski days annually. And when the
              world slows down a bit, I find solace in photography. The vibrant
              cityscapes of Chicago and the serene landscapes beyond offer a
              canvas that I cherish capturing through my lens.
            </p>
            <p>
              In essence, every twist and turn, every challenge faced, and every
              skill acquired has shaped me into who I am today: a dedicated
              software developer, a former athlete, a Navy veteran, and a hobby
              photographer with an undying spirit to learn and evolve.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink> */}
            <SocialLink
              href="https://www.instagram.com/owen.roth.v1"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/oroth8"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/owen-roth-86ba1ba4"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://unsplash.com/@oroth8"
              icon={UnsplashIcon}
              className="mt-4"
            >
              Follow on Unsplash
            </SocialLink>
            <SocialLink
              href="mailto:rothowen27@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              rothowen27@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
