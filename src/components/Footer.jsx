import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

import Email from "../static/email.png";

const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative flex flex-col items-center justify-center px-6 py-12 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[#0e0e1a]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="w-full max-w-7xl rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col flex-1 text-center lg:text-left">
            <h1 className="text-white text-3xl lg:text-5xl font-mono font-bold">
              Better Together
            </h1>
            <p className="mt-4 text-gray-300 text-sm lg:text-lg">
              Let me take you into a deeper experience, make a moment a lasting,
              conveyable memory. Let me help build your tribe.
            </p>

            <h2 className="mt-6 font-mono text-gray-300 text-sm lg:text-lg">
              <span className="text-emerald-400">Email:</span>{" "}
              hkshakib.cse@gmail.com
            </h2>
            <div className="flex justify-center lg:justify-start gap-6 mt-6 text-2xl">
              {[
                {
                  href: "https://github.com/hkshakib",
                  icon: <AiOutlineGithub />,
                },
                {
                  href: "https://www.linkedin.com/in/hkshakib/",
                  icon: <AiOutlineLinkedin />,
                },
                {
                  href: "https://web.facebook.com/Humayun.kibria.shakib/",
                  icon: <AiOutlineFacebook />,
                },
                {
                  href: "https://twitter.com/HKibriaShakib",
                  icon: <AiOutlineTwitter />,
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-emerald-700 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center">
            <img
              src={Email}
              alt="Email Illustration"
              className="h-48 w-48 lg:h-56 lg:w-56 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {curYear} All Rights Reserved | HKShakib
      </div>
    </footer>
  );
};

export default Footer;
