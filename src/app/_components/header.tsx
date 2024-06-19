import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        <FaHome />
      </Link>
    </h2>
  );
};

export default Header;
