import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or use to shoot photographs. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, 16GB RAM (2021)">
            I was using an Intel-based 12” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="40” Curved UltraWide 5K2K Nano IPS Monitor with Thunderbolt 4 Connectivity">
           Great monitor for working on multiple things at once. The display is super crisp and the colors are great. I also love the built in USB-C hub.
          </Tool>
          <Tool title="Logitech G915 Wireless Keyboard">
           This key board is a dream to type on. I love the low profile keys and the fact that it’s wireless. I also love the fact that it’s a mechanical keyboard so I can have better feedback while typing.
          </Tool>
          <Tool title="Logitech MX Master 3 for Mac">
      Great scrolling mouse. Great battery life. Feels great to use. I love the fact that it can connect to multiple devices at once and I can switch between them with the press of a button.
          </Tool>
          <Tool title="Herman Miller Aeron Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            Grew up on this one. I’ve tried to switch to other editors but I just keep coming back to VS Code. It’s just so good.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Photography">
          <Tool title="Fuji XS-10">
            Great camera for beginners. Lightweight and great to travel with.
          </Tool>
          <Tool title="Fuji XT-5">
            New camera I just got. I love that is 40 megapixels and has a bunch of more advanced features that I can grow into.
          </Tool>
          <Tool title="Fuji 23mm F.2">
           Great Prime lense for street photography and landscapes. Really sets the scene. Crisp and fast.
          </Tool>
          <Tool title="Fuji 16mm-55mm f2.8">
            Heavier lense but has great range and is super crisp. Perfect for traveling and when you do not know what you will be shooting.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
