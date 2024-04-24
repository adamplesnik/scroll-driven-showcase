import ScrollDown from '../../components/ScrollDown'
import BaseWithNav from '../../layouts/BaseWithNav'

const Circle = () => {
  return (
    <BaseWithNav>
      <ScrollDown />
      <div className="h-[300vh] scope/rotation">
        <div className="sticky top-0 flex gap-1">
          {[...Array(333)].map((i) => (
            <span key={i} className="animate-reveal h-20 w-px bg-red-100 timeline"></span>
          ))}
        </div>
        <div className="sticky top-0 flex h-screen justify-center pt-48 ">
          <div className="animate-to-rotate-0 size-[200vh] rotate-180 rounded-full border-4 border-dashed border-red-300 timeline/rotation">
            dfasdfasflbn dfasdf
          </div>
        </div>
        <div className="view-timeline/rotation">a</div>
      </div>
    </BaseWithNav>
  )
}

export default Circle
