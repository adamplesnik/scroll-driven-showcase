import { Check } from 'lucide-react'

const list = [
  { label: 'Two Bedrooms', desc: 'One with a queen-size bed, and the other with twin beds' },
  { label: 'WiFi', desc: 'Stay connected to the outside world' },
  { label: 'Living Area', desc: 'Cozy space with a georgeous view' },
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
          className="animate-to-translate-x-0 inline-flex w-fit -translate-x-[1000px] gap-1 rounded-full bg-slate-200/50 px-4 py-2 timeline-view range-on-entry/100px-160px dark:bg-zinc-600"
          key={i}
        >
          <Check className="animate-to-opacity-full text-emerald-600 opacity-0 timeline-view range-contain/10px-200px" />{' '}
          <span className="text-zinc-950 dark:text-zinc-100">{item.label}</span>
          {item.desc}
        </li>
      ))}
    </ul>
  )
}

export default Amenities
