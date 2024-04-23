import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import ScrollDown from '../../components/ScrollDown'
import BaseWithNav from '../../layouts/BaseWithNav'
import CenterLayout from '../../layouts/CenterLayout'
import Amenities from './Amenities'
import TextAppear from './TextAppear'
import landscapeImage from './assets/landscape.jpg'

const Forest = () => {
  return (
    <BaseWithNav>
      <ScrollDown />
      <div className="h-[200vh]">
        <div className="sticky top-0 flex max-h-screen">
          <div className="absolute inset-0 z-10 animate-gradient bg-gradient-to-l from-gray-100/0 via-gray-100/40 to-gray-200/0 bg-no-repeat timeline-view"></div>
          <div
            className="absolute inset-0 flex items-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${landscapeImage})` }}
          ></div>
          <div className="sticky top-1/2 z-10 flex h-dvh w-full items-center justify-center">
            <TextAppear />
          </div>
        </div>
      </div>
      <CenterLayout narrow>
        <Heading size={2}>Natural Retreat</Heading>
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
