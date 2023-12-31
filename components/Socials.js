// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiGithubFill,
  RiMailFill,
  RiLinkedinFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        target="_blank"
        href={"https://github.com/Luancss"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/luan-carlos-30035b246/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/luanworth"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        target="_blank"
        href="mailto:luancss.contact@gmail.com"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailFill />
      </Link>
    </div>
  );
};

export default Socials;
