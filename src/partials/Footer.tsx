import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import CenterLayout from '../layouts/CenterLayout'

const Footer = () => {
  return (
    <div className="border-t border-slate-300 bg-gray-300 py-8">
      <CenterLayout className="flex flex-col items-baseline gap-8 text-sm md:flex-row">
        <div className="tracking-[-0.0175em shrink-0 font-semibold">Scroll-driven playground</div>
        <div className="flex max-w-md flex-col">
          <Paragraph>
            Explore the possibilities of CSS scroll-driven animations created using a{' '}
            <Link href="https://scrolldriven.dev" target="_blank">
              scroll-driven animations plugin
            </Link>{' '}
            for Tailwind CSS.
          </Paragraph>
          <Paragraph>
            Powered by Tailwind CSS, no animation JS libs were used. Some browsers might have been
            harmed during the process. Chrome only (
            <Link href="https://caniuse.com/mdn-css_properties_animation-range" target="_blank">
              Can I use
            </Link>
            ).
          </Paragraph>
          <Paragraph>
            Created by{' '}
            <Link href="https://adamplesnik.com" target="_blank">
              Adam Plesník
            </Link>
            .
          </Paragraph>
        </div>
      </CenterLayout>
    </div>
  )
}

export default Footer
