import Link from "next/link";
import pageNotFound from "../../public/not found/404.gif";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center w-full min-h-screen bg-white">
      <Image
        src={pageNotFound}
        alt="404 Page"
        className="max-w-full max-h-full"
        priority
      />
      <Link href="/">
        <button className="py-3 px-6 text-xl cursor-pointer sm:px-8 rounded-full bg-[#2ecc71] text-white flex items-center gap-[10px] mt-6">
          <FaArrowLeftLong /> Back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;