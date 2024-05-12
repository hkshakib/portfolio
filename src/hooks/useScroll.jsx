import { useEffect, useState } from 'react';

const useScroll = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);

      const isScrolled = window.scrollY > 0;
      setIsNavbarSticky(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarSticky]);

  return { activeSection, isNavbarSticky };
};

export default useScroll;