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
import { useState } from 'react'
import viewImage from './assets/view.jpg'

type listType = {
  label: string
  desc: string
  icon: LucideIcon
  clickable?: boolean | false
  detail?: string | undefined
  detailImg?: string | undefined
}

const list: listType[] = [
  {
    label: 'Living Area',
    desc: 'Cozy space with a gorgeous view',
    icon: Stars,
    clickable: true,
    detail: "Money can't buy happiness, but they can definitely but this view.",
    detailImg: viewImage,
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
  { label: 'Parking', desc: 'Space for your vehicle', icon: Car },
]

const Amenities = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <ul className="mb-24 mt-16 flex flex-col gap-4">
      {list.map((item, i) => (
        <li
          className={
            'flex translate-x-[30vw] animate-stroke-opacity gap-4 rounded-lg bg-slate-200/30 px-4 py-2 opacity-0 timeline-view range-on-entry/100px-160px dark:bg-zinc-800/60' +
            (item.clickable ? ' cursor-pointer transition-transform hover:scale-110' : '')
          }
          onClick={() => item.clickable && setClicked(!clicked)}
          key={i}
        >
          <item.icon className="mt-2 flex-shrink-0 text-slate-500 path:animate-to-stroke-dashoffset-0 path:timeline-view path:range-on-entry/100%-400px path:dash-offset/-50 path:dash-array/100" />{' '}
          <div className="flex w-full -translate-x-10 animate-to-translate-x-0 flex-col gap-1 timeline-view range-on-entry/20%-40%">
            <span className="text-zinc-950 dark:text-zinc-100">{item.label}</span>
            <span className="text-sm">{item.desc}</span>
            <div
              className={
                'h-0 gap-4 overflow-hidden transition-[height] duration-500' +
                (clicked ? ' h-fit' : '') +
                (item.detail ? ' flex flex-col' : ' hidden')
              }
            >
              <div className="flex h-80 w-full items-end overflow-hidden rounded-lg">
                <img src={item.detailImg} className="" />
              </div>
              {item.detail}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Amenities
