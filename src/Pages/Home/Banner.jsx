import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import banner1 from '../../assets/Home/banner-1.jpg';
import banner2 from '../../assets/Home/banner-2.jpg';
import banner3 from '../../assets/Home/banner-3.webp';
import banner4 from '../../assets/Home/banner-4.webp';
import BannerHeader from './BannerHeader';

const Banner = () => {
  return (
    <>
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full">
          <img src={banner1} className="w-full" />
          <BannerHeader></BannerHeader>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={banner2} className="w-full" />
          <BannerHeader></BannerHeader>
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={banner3} className="w-full" />
          <BannerHeader></BannerHeader>
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={banner4} className="w-full" />
          <BannerHeader></BannerHeader>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
