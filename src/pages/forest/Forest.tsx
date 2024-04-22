import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import BaseWithNav from '../../layouts/BaseWithNav'
import CenterLayout from '../../layouts/CenterLayout'
import TextAppear from './TextAppear'
import Amenities from './Amenities'
import landscapeImage from './assets/landscape.jpg'

const Forest = () => {
  return (
    <BaseWithNav>
      <div className="h-[200vh]">
        <div className="sticky top-0 h-screen">
          <div className="animate-gradient absolute inset-0 z-10 bg-gradient-to-l from-gray-100/0 via-gray-100/40 to-gray-200/0 bg-no-repeat timeline"></div>
          <picture className="animate-to-opacity-full absolute z-0 h-screen overflow-hidden opacity-0 timeline-view range/300px-700px">
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
      </CenterLayout>
    </BaseWithNav>
  )
}

export default Forest
