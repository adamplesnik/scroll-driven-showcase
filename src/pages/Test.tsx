import BaseWithNav from '../layouts/BaseWithNav'
import TextAppear from '../partials/TextAppear'

function Home() {
  return (
    <BaseWithNav>
      <div className="flex h-dvh w-full items-center justify-center">
        <TextAppear />
      </div>
    </BaseWithNav>
  )
}

export default Home
