import { Slide } from 'react-awesome-reveal';

const Heading = ({ heading }) => {
  return (
    <Slide>
      <h1 className="text-center text-7xl text-[#68c4bc] my-8 border-y-2 p-4">
        {heading}
      </h1>
    </Slide>
  );
};

export default Heading;
