import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex h-[100px] p-5 items-center justify-around border bg-[#FAF9F7]">
      <div className="flex"></div>
      <div className="flex text-[24px]">
      <motion.a
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          href="/"
        >
          <span className="text-blue-600">HKS</span>
          <span>hakib</span>
        </motion.a>
      </div>
      <div className="flex cursor-pointer">Request a Blog</div>
    </div>
  );
};

export default Navbar;
