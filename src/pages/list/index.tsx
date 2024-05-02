import Separator from '../../components/Separator'
import BaseWithNav from '../../layouts/BaseWithNav'
import Header from './Header'
import Song, { SongType } from './Song'
import album from './assets/album.jpg'
import './assets/animations.css'

const songList: SongType[] = [
  {
    title: 'So What',
    length: '9:22',
  },
  {
    title: 'Freddie Freeloader',
    length: '9:46',
  },
  {
    title: 'Blue in Green',
    length: '5:27',
  },
  {
    title: 'All Blues',
    length: '11:33',
  },
  {
    title: 'Flamenco Sketches',
    length: '9:26',
  },
]

const List = () => {
  return (
    <BaseWithNav>
      <div className="h-[200vh] min-h-screen bg-gradient-to-t from-slate-400 to-zinc-600 scope/trigger dark:from-zinc-700 dark:to-zinc-900">
        <div className="sticky top-0 mx-auto max-w-screen-sm px-8 py-24">
          <div className="flex flex-col gap-2">
            <div className="sticky top-24 z-10 mb-4 animate-from-box-shadow-none rounded-lg bg-zinc-300/20 p-4 shadow-xl backdrop-blur timeline dark:bg-zinc-700/70">
              <img
                src={album}
                alt="Kind of Blue, album cover artwork"
                className="animate-list-hero-picture mb-8 max-h-[70vh] rounded-lg timeline"
              />
              <Header className="sm:animate-move-header relative z-10 sm:timeline sm:range/28vh_100%" />
            </div>
            <div className="flex animate-to-opacity-full flex-col gap-2 rounded-lg bg-zinc-300/20 p-4 opacity-0 shadow-xl backdrop-blur timeline range/30vh_40vh dark:bg-zinc-700/70">
              {songList.map((song, i) => (
                <>
                  <Song order={i + 1} key={i} title={song.title} length={song.length} />
                  <Separator key={10 + i} />
                </>
              ))}
              <div className="mt-1 flex items-center text-sm">
                <span className="flex-1 opacity-60">Total</span>
                <div>45:34</div>
              </div>
              <p className="my-8">
                Kind of Blue is regarded by many critics as Davis's masterpiece, the greatest jazz
                album ever recorded, and one of the best albums of all time. Its impact on music,
                including jazz, rock, and classical genres, has led writers to also deem it one of
                the most influential albums ever made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseWithNav>
  )
}

export default List
