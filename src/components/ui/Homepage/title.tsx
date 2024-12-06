import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <div className="flex h-5/6 flex-col items-center justify-center">
      <h1 className="text-9xl md:text-7xl">trace.ai</h1>
      <div className="text-md mt-3 md:mt-5 md:text-2xl">
        <span>Enhance your notes for</span>
        <strong>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              " school.",
              1000,
              " a project.",
              1000,
              " work.",
              1000,
              " a test.",
              1000,
              " a speech.",
              1000,
            ]}
            repeat={Infinity}
          />
        </strong>
      </div>
    </div>
  );
};

export default Title;
