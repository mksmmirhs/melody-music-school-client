import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/Home/banner-1.jpg';
import banner2 from '../../assets/Home/banner-2.jpg';
import banner3 from '../../assets/Home/banner-3.webp';
import banner4 from '../../assets/Home/banner-4.webp';

const Banner = () => {
  return (
    <Carousel autoPlay={true}>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
    </Carousel>
  );
};

export default Banner;
