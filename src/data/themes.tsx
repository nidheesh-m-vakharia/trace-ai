export const THEMES: {
  [name: string]: React.ReactNode;
} = {
  mono: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#4d4d4d] to-[#ffffff]`}
    ></div>
  ),
  pink: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#8a0040] to-[#ff4d85]`}
    ></div>
  ),
  github: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#1a1c23] to-[#39A564]`}
    ></div>
  ),
  solarized: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#004052] to-[#b0c2c2]`}
    ></div>
  ),
  dracula: (
    <div
      className={`h-6 w-6 rounded-full bg-gradient-to-br from-[#004052] to-[#8a0040]`}
    ></div>
  ),
};
