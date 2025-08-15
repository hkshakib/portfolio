import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ProblemSolving = lazy(() => import("./pages/ProblemSolving"));
const Achivements = lazy(() => import("./pages/Achivements"));
const Experience = lazy(() => import("./pages/Experience"));
const Education = lazy(() => import("./pages/Education"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Projects = lazy(() => import("./pages/Projects"));
const Research = lazy(() => import("./pages/Research"));
const Skills = lazy(() => import("./pages/Skills"));
const Home = lazy(() => import("./pages/Home"));

const Blogs = lazy(() =>
  import("./blog/Blogs").then((m) => ({ default: m.BlogHome }))
);
const BlogPostPage = lazy(() =>
  import("./blog/Blogs").then((m) => ({ default: m.BlogPostPage }))
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PortfolioLanding() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <ProblemSolving />
      <Experience />
      <Projects />
      <Research />
      <Education />
      <Achivements />
      <Footer />
    </>
  );
}

export default function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const onScroll = () => setIsAtTop(window.scrollY === 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full-screen font-inter flex flex-col">
      <Suspense fallback={<div className="p-8">Loading…</div>}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PortfolioLanding />} />
          <Route
            path="/blogs"
            element={
              <>
                <Blogs />
              </>
            }
          />
          <Route
            path="/blogs/:slug"
            element={
              <>
                <Navbar />
                <BlogPostPage />
                <Footer />
              </>
            }
          />
          <Route path="/blog" element={<Navigate to="/blogs" replace />} />
          <Route
            path="/blog/:slug"
            element={<Navigate to="/blogs/:slug" replace />}
          />

          <Route path="*" element={<div className="p-8">Not found</div>} />
        </Routes>
        <div
          className={`fixed bottom-8 right-8 bg-gray-500 p-2 rounded-full text-white cursor-pointer animate-bounce ${
            isAtTop ? "hidden" : ""
          }`}
          onClick={() =>
            scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" })
          }
          aria-label="Scroll to top"
          role="button"
        >
          <FaArrowUp size={24} />
        </div>
      </Suspense>
    </div>
  );
}
