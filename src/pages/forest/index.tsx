import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import BaseWithNav from '../../layouts/BaseWithNav'
import CenterLayout from '../../layouts/CenterLayout'
import TextAppear from './TextAppear'
import Amenities from './Amenities'
import landscapeImage from './assets/landscape.jpg'
import viewImage from './assets/view.jpg'
import ScrollDown from '../../components/ScrollDown'

const Forest = () => {
  return (
    <BaseWithNav>
      <ScrollDown />
      <div className="h-[200vh]">
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-0 z-10 animate-gradient bg-gradient-to-l from-gray-100/0 via-gray-100/40 to-gray-200/0 bg-no-repeat timeline"></div>
          <picture className="absolute z-0 h-screen animate-to-opacity-full overflow-hidden opacity-0 timeline-view range/300px-700px">
            <img src={landscapeImage} alt="Photo of the mountain landscape" />
          </picture>
          <div className="sticky top-1/2 z-10 flex h-dvh w-full items-center justify-center">
            <TextAppear />
          </div>
        </div>
      </div>
      <CenterLayout narrow>
        <Heading size={2}>Lorem</Heading>
        <Paragraph>
          Nestled deep within a misty mountain forest, this charming chalet offers a rustic escape
          surrounded by nature's beauty. With two bedrooms and WiFi, it's the perfect blend of
          comfort and wilderness.
        </Paragraph>
        <Paragraph>
          Inside, the living area welcomes you with its cozy atmosphere, featuring a modern
          workplace and views of towering trees through large windows. The kitchen is equipped with
          modern amenities, allowing you to cook while still feeling connected to the outdoors.
        </Paragraph>
        <Amenities />
        <picture className="z-0 aspect-square size-96 animate-to-opacity-full overflow-hidden rounded-full object-cover opacity-0 timeline-view range-on-entry">
          <img src={viewImage} alt="Photo of the mountain landscape with huts" />
        </picture>
      </CenterLayout>
    </BaseWithNav>
  )
}

export default Forest
