import { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => (
  <div className="bg-indigo-400 text-black p-4 text-center mt-auto">
    <div>Developed by  <Link
        to="https://github.com/WebRevo"
        className="hover:underline hover:font-bold opacity-85 hover:text-white hover:opacity-100"
      >
        Sarathi S
      </Link></div>

  </div>
);

export default Footer;
