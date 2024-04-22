const TextAppear = () => {
  const text = Array.from('Experience Tranquility')
  // const textLength = text.length
  return (
    <>
      {text.map((letter, i) => {
        return (
          <span
            className="animate-to-max-width-unset inline-block max-w-0 overflow-hidden text-4xl text-zinc-100 timeline"
            style={{
              animationRangeStart: (i + 1) * (i + 10),
              animationRangeEnd: (i + 1) * (i + 12),
            }}
            key={i}
          >
            {letter === ' ' ? '\u00a0' : letter}
          </span>
        )
      })}
    </>
  )
}

export default TextAppear
