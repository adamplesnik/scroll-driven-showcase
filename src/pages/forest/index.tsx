import { Github } from 'lucide-react'
import CodeBlock from '../../components/CodeBlock'
import Heading from '../../components/Heading'
import Paragraph from '../../components/Paragraph'
import ScrollDown from '../../components/ScrollDown'
import TimelineMarker from '../../components/TimelineMarker'
import BaseWithNav from '../../layouts/BaseWithNav'
import CenterLayout from '../../layouts/CenterLayout'
import Amenities from './Amenities'
import TextAppear from './TextAppear'
import landscapeImage from './assets/landscape.jpg'
import viewImage from './assets/view.jpg'

const Forest = () => {
  return (
    <BaseWithNav>
      <ScrollDown />
      <div className="h-[200vh]">
        <CenterLayout narrow>
          <div className="relative">
            <TimelineMarker
              className="top-[190px]"
              textStart="190px"
              textEnd="timeline"
            ></TimelineMarker>
            <TimelineMarker
              className="top-[210px]"
              textStart="210px"
              textEnd="scroll(y)"
            ></TimelineMarker>
          </div>
        </CenterLayout>
        <div className="sticky top-0 flex max-h-screen">
          <div
            className="absolute inset-0 flex items-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${landscapeImage})` }}
          ></div>
          <div className="sticky top-1/2 z-10 flex h-screen w-full items-center justify-center">
            <TextAppear />
          </div>
        </div>
        <CenterLayout narrow>
          <CodeBlock
            language="html"
            className="relative z-50"
            Icon={Github}
            linkHref="https://github.com/adamplesnik/scroll-driven-playground/tree/main/src/pages/forest"
          >{`<span class="max-w-0 animate-to-max-width-unset overflow-hidden timeline" style="animation-range: 190px 210px;">e</span>`}</CodeBlock>
        </CenterLayout>
      </div>
      <CenterLayout narrow className="mb-24">
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
        <Paragraph>
          At our establishment, we pride ourselves on maintaining a traditional approach to
          receiving orders. We exclusively accept orders through our landline telephone service.
        </Paragraph>
        <Paragraph>
          In a world where digital communication dominates, we embrace the simplicity and
          reliability of the landline. When you call us, you'll be greeted by a friendly voice ready
          to take your order, just like it's always been.
        </Paragraph>
        <Paragraph>Or not.</Paragraph>
        <img src={viewImage} alt="" className="rounded-lg" />
      </CenterLayout>
    </BaseWithNav>
  )
}

export default Forest
