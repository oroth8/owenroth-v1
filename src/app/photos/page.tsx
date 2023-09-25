import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { StaticImageData } from 'next/image'

import image1 from '@/images/photos/chicago-bw-2.jpg'
import image2 from '@/images/photos/chicago-bw.jpg'
import image3 from '@/images/photos/hakone.jpg'
import image4 from '@/images/photos/kyoto-1.jpg'
import image5 from '@/images/photos/kyoto-2.jpg'
import image6 from '@/images/photos/kyoto-3.jpg'
import image7 from '@/images/photos/kyoto-4.jpg'
import image8 from '@/images/photos/suicide-forest.jpg'
import image9 from '@/images/photos/tokoyo.jpg'
import image10 from '@/images/photos/zion.jpg'
import image11 from '@/images/photos/zion-1.jpg'

type File = {
  title: string
  source: StaticImageData // This would be the type of image1, which in most cases might be a string or any other suitable type.
}

const files: File[] = [
  {
    title: 'Chicago River BW',
    source: image1,
  },
  {
    title: 'Chicago St. Regis BW',
    source: image2,
  },
  {
    title: 'Hakone Shrine',
    source: image3,
  },
  {
    title: 'Kyoto Bamboo Forrest',
    source: image4,
  },
  {
    title: 'Kyoto Gold Temple',
    source: image5,
  },
  {
    title: 'Kyoto Rainy Night',
    source: image6,
  },
  {
    title: 'Kyoto Night Street',
    source: image7,
  },
  {
    title: 'Suicide Forrest',
    source: image8,
  },
  {
    title: 'Tokyo',
    source: image9,
  },
  {
    title: 'Zion Rock Run',
    source: image10,
  },
  {
    title: 'Zion',
    source: image11,
  },
]

function PhotosSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {children}
      </ul>
    </Section>
  )
}

function PhotoGrid({}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      {files.map((file) => (
        <li key={file.title} className="relative">
          <div className="aspect-h-7 aspect-w-10 group block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:bg-gray-300 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img
              src={file.source.src}
              alt={file.title}
              className="pointer-events-none object-cover group-hover:opacity-75"
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          {/* <p className="pointer-events-none block text-sm font-medium text-gray-500">
            {file.size}
          </p> */}
        </li>
      ))}
    </>
  )
}

export const metadata: Metadata = {
  title: 'Photos',
  description: 'Some pictures I have taken over the years.',
}

export default function Photos() {
  return (
    <SimpleLayout
      title="Sometimes I moonlight as a (amateur) photographer."
      intro="I recently picked up photography as a hobby and have been enjoying it a lot. Here are some of my favorite shots. Feel free to checkout Unsplash for high quality free downloads or contact me if you would like to use any of these photos."
    >
      <PhotosSection title="Photos">
        <PhotoGrid />
      </PhotosSection>
    </SimpleLayout>
  )
}
