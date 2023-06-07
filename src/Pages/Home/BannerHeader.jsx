import { Fade, Slide } from 'react-awesome-reveal';
const BannerHeader = () => {
  return (
    <div className="bg-[#00000080] absolute w-full h-full text-white">
      <div className="flex flex-col items-center justify-center h-full">
        <Slide>
          <h1 className="text-7xl mb-4">Melody Music School</h1>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
          <p className="text-center">
            Unleash your inner symphony with Melody Music Instrument School -
            Discover, <br /> Create, and Harmonize with Passion and Precision!
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default BannerHeader;
