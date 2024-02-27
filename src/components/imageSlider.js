import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextImage from 'next/image'
import { Image, Img } from "@chakra-ui/image";

import menuPic1 from '../../public/jpg_menu/1.jpg'
import menuPic2 from '../../public/jpg_menu/2.jpg'
import menuPic3 from '../../public/jpg_menu/3.jpg'
import menuPic4 from '../../public/jpg_menu/4.jpg'
import menuPic5 from '../../public/jpg_menu/5.jpg'




export const SlideData = [
  menuPic1,
  menuPic2,
  menuPic3,
  menuPic4,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,
  menuPic5,


  ];
  
//Need to make sure images look good on desktop, ipad and desktop
//currently not loading - 
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop autoPlay stopOnHover showThumbs={false} interval="3700">
      {SlideData.map((slide) => {
        return <NextImage src={slide} key={slide} priority={true} />;
        // return <NextImage src={slide} key={slide} height={2380} width={1682} priority={true} />;

        // return <Image  key={slide} src={slide}></Image>
      })}
    </Carousel>
  );
};

export default ImageSlider;
