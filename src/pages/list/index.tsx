import { Music } from 'lucide-react'
import BaseWithNav from '../../layouts/BaseWithNav'
import CenterLayout from '../../layouts/CenterLayout'
import PlayButton from './PlayButton'
import Song, { SongType } from './Song'
import album from './assets/album.jpg'
import Separator from '../../components/Separator'

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
      <div className="min-h-screen ">
        <CenterLayout className="pt-24">
          <div className="flex flex-col gap-2 rounded-lg bg-zinc-300/20 p-4 shadow-xl backdrop-blur dark:bg-zinc-800/70">
            <img src={album} alt="Kind of Blue, album cover artwork" className="mb-4 rounded-lg" />
            <div className="flex items-center">
              <h1 className="flex-1 text-3xl font-medium">Kind of Blue</h1>
              <PlayButton />
            </div>
            <h2 className="text-2xl font-medium">Miles Davis</h2>
            <div className="my-4 flex items-center gap-2 text-sm">
              <Music className="inline-block size-4" strokeWidth={3} />
              <span className="font-bold">1959</span>
              jazz
            </div>
            {songList.map((song, i) => (
              <>
                <Song order={i + 1} title={song.title} length={song.length} />
                <Separator />
              </>
            ))}
            <div className="flex items-center text-sm ">
              <span className="flex-1 opacity-60">Total</span>
              <div>45:34</div>
            </div>
            <p>
              Kind of Blue is regarded by many critics as Davis's masterpiece, the greatest jazz
              album ever recorded, and one of the best albums of all time. Its impact on music,
              including jazz, rock, and classical genres, has led writers to also deem it one of the
              most influential albums ever made.
            </p>
          </div>
        </CenterLayout>
      </div>
    </BaseWithNav>
  )
}

export default List
