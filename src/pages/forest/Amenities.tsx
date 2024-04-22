import { Brain, Check, TreePine } from 'lucide-react'

const list = [
  { label: 'Two Bedrooms', desc: 'One with a queen-size bed, and the other with twin beds' },
  { label: 'WiFi', desc: 'Stay connected to the outside world' },
  { label: 'Living Area', desc: 'Cozy space with a gorgeous view' },
  { label: 'Kitchen', desc: 'Fully equipped with modern appliances' },
  { label: 'Bathroom', desc: 'Complete with a shower' },
  { label: 'Deck', desc: 'Enjoy forest views and fresh air' },
  { label: 'Nature Trails', desc: 'Explore the surrounding forest' },
  { label: 'Parking', desc: 'Space for your vehicle' },
  { label: 'Heating', desc: 'Keep warm on chilly mountain nights' },
  { label: 'Linens and Towels', desc: 'Provided for your convenience' },
  { label: 'Scenic Views', desc: 'Misty mountain forest surrounds the chalet' },
  { label: 'Peace and Quiet', desc: 'Escape the hustle and bustle of daily life' },
]

const Amenities = () => {
  return (
    <ul className="flex flex-col gap-4">
      {list.map((item, i) => (
        <li
          className="animate-stroke-opacity inline-flex w-fit translate-x-[30vw] gap-2 rounded-full bg-slate-200/50 px-4 py-2 opacity-0 timeline-view range-on-entry/100px-160px dark:bg-zinc-800/60"
          key={i}
        >
          <div className="flex gap-2">
            <Check className="path:animate-to-stroke-dashoffset-0 path:dash-offset/-47 path:dash-array/100 path:timeline-view path:range-on-entry/50px-300px animate-to-opacity-full text-emerald-600 opacity-0 timeline-view range-contain/10px-200px" />{' '}
            <span className="text-zinc-950 dark:text-zinc-100">{item.label}</span>
          </div>
          <span>{item.desc}</span>
        </li>
      ))}
    </ul>
  )
}

export default Amenities
