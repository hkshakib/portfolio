import { scroller } from "react-scroll";

export const closeMenuAndScroll = (sectionId, setMenuOpen) => {
    setMenuOpen(false);
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };
