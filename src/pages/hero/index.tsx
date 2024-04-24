import { Github } from 'lucide-react'
import CodeBlock from '../../components/CodeBlock'
import ScrollDown from '../../components/ScrollDown'
import TimelineMarker from '../../components/TimelineMarker'
import BaseWithNav from '../../layouts/BaseWithNav'
import CenterLayout from '../../layouts/CenterLayout'
import ChartColumn from './ChartColumn'

const columns = [
  'max-h-[40%]',
  'max-h-[65%]',
  'max-h-[78%]',
  'max-h-[67%]',
  'max-h-[100%]',
  'max-h-[88%]',
  'max-h-[92%]',
  'max-h-[66%]',
  'max-h-[88%]',
  'max-h-[43%]',
]

const gradient = `<div class="animate-gradient timeline range/0-200vh"></div>`
const html = `<div class="animate-reveal timeline-view"></div>`
const chart = `<div class="animate-to-height-full timeline/chart range-on-entry/60px-400px"></div>`

const Hero = () => {
  return (
    <BaseWithNav>
      <ScrollDown />
      <div className="bg-gradient-to-t from-slate-400/0 to-slate-600/50">
        <CenterLayout className="h-[200vh]">
          <div className="relative h-full w-full">
            <TimelineMarker textStart="timeline" textEnd="0%" className="top-24" />
            <div className="sticky top-40 animate-gradient bg-gradient-to-r from-violet-200/0 via-red-600/70 to-red-300/0 bg-clip-text bg-no-repeat pb-12 text-5xl font-bold text-transparent opacity-0 timeline range/0-200vh no-animations:opacity-100 sm:text-7xl md:text-9xl dark:via-red-600/70">
              Scroll Superpower.
            </div>
            <TimelineMarker textStart="+200vh" textEnd="100%" className="bottom-8" />
          </div>
        </CenterLayout>
        <CenterLayout>
          <CodeBlock
            language="html"
            className="mx-auto mb-72 block w-fit"
            Icon={Github}
            linkHref="https://github.com/adamplesnik/scroll-driven-playground/tree/main/src/pages/hero"
          >
            {gradient}
          </CodeBlock>
        </CenterLayout>
      </div>
      <div className="mb-72 bg-gradient-to-b from-slate-600/0 via-slate-600/30 to-slate-600/0">
        <div className="sticky top-0 h-dvh w-full">
          <CenterLayout className="relative flex h-dvh flex-col justify-between px-4 py-16 sm:px-8">
            <TimelineMarker absolute={false} textStart="timeline-view" textEnd={'100%'} />
            <TimelineMarker absolute={false} textEnd={'75%'} />
            <TimelineMarker absolute={false} textEnd={'50%'} />
            <TimelineMarker absolute={false} textEnd={'25%'} />
            <TimelineMarker absolute={false} textStart="timeline-view" textEnd={'0%'} />
          </CenterLayout>
        </div>
        <div className="min-h-screen">
          <CenterLayout className="relative z-20">
            <div className="animate-reveal mx-auto w-fit text-center opacity-0 timeline-view no-animations:opacity-100">
              <div className="text-md w-full font-medium text-zinc-950 sm:text-lg md:text-xl dark:text-zinc-200">
                'Luke, he is your father.'
              </div>
            </div>
            <CodeBlock
              className="mx-auto mt-12 block w-fit"
              Icon={Github}
              linkHref="https://github.com/adamplesnik/scroll-driven-playground/tree/main/src/pages/hero"
              language="html"
            >
              {html}
            </CodeBlock>
          </CenterLayout>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-slate-400/0 to-slate-400/30">
        <div className="sticky top-0 flex h-screen w-full items-center scope/chart">
          <CenterLayout className="h-2/3 w-full">
            <div className="relative flex h-full items-center justify-between pl-32">
              {columns.map((column, i) => (
                <ChartColumn className={column} key={i} />
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-500 view-timeline/chart" />
            </div>
            <div className="relative">
              <TimelineMarker textStart="`on-entry`" textEnd="0" className="-bottom-2" />
              <TimelineMarker textStart="+60px" textEnd="0%" className="-bottom-[70px]" />
            </div>
          </CenterLayout>
        </div>
        <CenterLayout className="relative mt-64">
          <div className="relative pb-12">
            <TimelineMarker textStart="+400px" textEnd="100%" className="top-4" />
          </div>
          <CodeBlock
            className="mx-auto  block w-fit "
            language="html"
            Icon={Github}
            linkHref="https://github.com/adamplesnik/scroll-driven-playground/tree/main/src/pages/hero"
          >
            {chart}
          </CodeBlock>
        </CenterLayout>
        <div className="min-h-dvh"></div>
      </div>
    </BaseWithNav>
  )
}

export default Hero
