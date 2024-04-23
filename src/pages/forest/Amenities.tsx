import {
  Bed,
  Car,
  LampDesk,
  LucideIcon,
  MapPinned,
  ShowerHead,
  Stars,
  Utensils,
} from 'lucide-react'
import CodeBlock from '../../components/CodeBlock'
import TimelineMarker from '../../components/TimelineMarker'

const codeExample = ``

type listType = {
  label: string
  desc: string
  icon: LucideIcon
  code?: string
}

const list: listType[] = [
  {
    label: 'Living Area',
    desc: 'Cozy space with a gorgeous view',
    icon: Stars,
  },
  {
    label: 'Two Bedrooms',
    desc: 'A queen-size bed and twin beds',
    icon: Bed,
  },
  { label: 'Workplace', desc: 'Ergonomic desk and reliable wi-fi', icon: LampDesk },
  { label: 'Kitchen', desc: 'Fully equipped with modern appliances', icon: Utensils },
  { label: 'Bathroom', desc: 'Complete with a shower, linens and towels', icon: ShowerHead },
  {
    label: 'Nature Trails',
    desc: 'Explore the surrounding forest',
    icon: MapPinned,
  },
  {
    label: 'Parking',
    desc: 'Space for your vehicle',
    icon: Car,
    code: '<li class="animate-to-translate-x-0 timeline-view range-on-entry/64px-144px translate-x-[30vw]">',
  },
]

const jsExample = `matchUtilities(
  {
    'dash-array': (value, { modifier }) => ({
      strokeDasharray: modifier,
    }),
  },
  { values: { DEFAULT: '' }, modifiers: 'any' }
)
addVariant('path', '& > path')`

const Amenities = () => {
  return (
    <div className="mb-24 mt-24">
      <div className="relative">
        <ul className="mb-28 flex flex-col gap-4">
          {list.map((item, i) => (
            <li
              className="flex translate-x-[30vw] animate-stroke-opacity gap-4 rounded-lg bg-slate-200/30 px-4 py-2 opacity-0 timeline-view range-on-entry/64px-144px dark:bg-zinc-800/60"
              key={i}
            >
              <item.icon className="mt-2 flex-shrink-0 text-slate-500 path:animate-to-stroke-dashoffset-0 path:timeline-view path:range-on-entry/100%-400px path:dash-offset/-50 path:dash-array/100" />{' '}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <span className="text-zinc-950 dark:text-zinc-100">{item.label}</span>
                <span className="text-sm">{item.desc}</span>
                {item.code && <CodeBlock language="html">{item.code}</CodeBlock>}
              </div>
            </li>
          ))}
        </ul>
        <TimelineMarker
          className="absolute bottom-[135px] left-0 right-0 z-50"
          textStart="0px"
          textEnd="`on-entry`"
        />
        <TimelineMarker
          className="absolute bottom-[71px] left-0 right-0 z-50"
          textStart="100px"
          textEnd="0%"
        />
        <TimelineMarker
          className="absolute -bottom-[9px] left-0 right-0 z-50"
          textStart="160px"
          textEnd="100%"
        />
      </div>
      <CodeBlock language="javascript">{jsExample}</CodeBlock>
      <CodeBlock language="html">{codeExample}</CodeBlock>
    </div>
  )
}

export default Amenities
