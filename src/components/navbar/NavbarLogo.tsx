import { useRouter } from "next/navigation";
export const NavbarLogo = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div onClick={handleClick} className="flex items-center space-x-4">
      <h2 className="font-bold tracking-tighter">Trace</h2>
    </div>
  );
};
