import ScrollDown from '../../components/ScrollDown'

const Circle = () => {
  return (
    <>
      <ScrollDown />
      <div className="h-[300vh] scope/rotation">
        <div className="sticky top-96 flex h-20 w-full translate-x-1/2 animate-to-translate-x-50 flex-col gap-2 timeline">
          <div className="sticky top-48 flex justify-between">
            {[...Array(6)].map((e, i) => (
              <span className="size-4 bg-red-400" key={e + i}></span>
            ))}
          </div>
          <div className="flex gap-2">
            {[...Array(256)].map((e, i) => (
              <div className="flex h-full items-stretch justify-center">
                <span
                  key={e + i}
                  className="h-12 w-px animate-reveal bg-cyan-400 timeline"
                  style={{
                    animationDelay: (i * 100).toString() + 'ms',
                    // opacity: (i * 0.01).toString(),
                  }}
                ></span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="sticky top-0 flex h-screen justify-center pt-48 ">
          <div className="animate-to-rotate-0 size-[200vh] rotate-180 rounded-full border-4 border-dashed border-red-300 timeline/rotation">
            dfasdfasflbn dfasdf
          </div>
        </div> */}
        <div className="view-timeline/rotation">a</div>
      </div>
    </>
  )
}

export default Circle
