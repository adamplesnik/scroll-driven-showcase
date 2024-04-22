const TextAppear = () => {
  const text = Array.from('Experience Tranquility')
  // const textLength = text.length
  return (
    <>
      {text.map((letter, i) => {
        return (
          <span
            className="inline-block h-24 max-w-0 animate-to-max-width-unset overflow-hidden text-4xl text-zinc-100 timeline sm:text-6xl md:text-7xl"
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
