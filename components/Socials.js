import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiFacebookLine,
  RiPinterestLine,
  RiBehanceLine,
  RiDribbbleLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 text-lg">
      <Link
        href={""}
        className="hover:text-sky-700 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={""}
        className="hover:text-sky-700 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={""}
        className="hover:text-sky-700 transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={""}
        className="hover:text-sky-700 transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
      <Link
        href={""}
        className="hover:text-sky-700 transition-all duration-300"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={""}
        className="hover:text-sky-700 transition-all duration-300"
      >
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
