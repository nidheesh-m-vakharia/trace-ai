import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <div className="flex h-5/6 flex-col items-center justify-center">
      <div className="mb-[1vw] text-[5vw] font-bold">trace.ai</div>
      <div className="mt-[2vw] text-[1vw]">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            "Enhance your notes for school.",
            1000,
            "Enhance your notes for a project.",
            1000,
            "Enhance your notes for work.",
            1000,
            "Enhance your notes for a test.",
            1000,
            "Enhance your notes for a speech.",
            1000,
          ]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Title;
