import Link from "next/link";
import Github from "../assets/images/icons/github.svg";
import Instagram from "../assets/images/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="max-w-[1480px] mx-auto px-5 sm:px-8 mt-28">
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 pt-10 border-t border-gray-100 dark:border-gray-900">
        <h3 className="uppercase text-sm tracking-wider mb-6">Follow Me</h3>
        <div className="flex gap-5 text-xl heading-color ">
          <Link href={"https://instagram.com"}>
            <Instagram width={30} height={30} />
          </Link>
          <Link href={"https://github.com"}>
            <Github width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className="py-6 text-sm text-center uppercase tracking-wide">
        © 2023 코후비 블로그
      </div>
    </footer>
  );
};
export default Footer;
