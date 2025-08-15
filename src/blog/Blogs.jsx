import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const POSTS = [
  {
    slug: "building-a-premium-portfolio",
    title: "Building a Premium Portfolio with React & Tailwind",
    date: "2025-08-01",
    category: "Development",
    tags: ["React", "Tailwind", "UI"],
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
    excerpt:
      "A hands-on guide to crafting a polished, performant portfolio with delightful interactions.",
    content: `# Building a Premium Portfolio with React & Tailwind

A great portfolio balances **clarity**, **speed**, and **personality**.

## Why Tailwind
Utility-first styling helps you iterate quickly without fighting CSS.

## Layout System
Use a max-w-7xl container, generous white space, and responsive grids.

## Animations
Framer Motion adds polish—subtle fades, slides, and micro-interactions.

### Code Example
\`\`\`tsx
export function Fancy() {
  return <div className="rounded-2xl p-6 shadow">Fancy ✨</div>
}
\`\`\`

> Tip: Keep animations under 250ms for snappiness.
`,
    readTime: 6,
  },
  {
    slug: "agentic-ai-getting-started",
    title: "Agentic AI: Getting Started the Right Way",
    date: "2025-07-22",
    category: "AI",
    tags: ["AI", "Agents", "Roadmap"],
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    excerpt:
      "Agentic AI is hot—but where do you begin? Here's a focused path from zero to shipping.",
    content: `# Agentic AI: Getting Started

Agentic systems chain tools, memory, and goals. Start simple: one tool, one loop.

## Foundations
- Python fluency
- Prompting & evaluation
- A vector DB

## Minimal Agent
1. Parse a task
2. Choose a tool
3. Execute, reflect, repeat

### Checklist
- [ ] Define objective
- [ ] Guardrails
- [ ] Metrics
`,
    readTime: 5,
  },
  {
    slug: "restaurant-site-seo-checklist",
    title: "Restaurant Site SEO Checklist (That Actually Works)",
    date: "2025-07-10",
    category: "Growth",
    tags: ["SEO", "Local", "Restaurants"],
    cover:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1400&auto=format&fit=crop",
    excerpt:
      "From Google Business to menu schema—10 steps to outrank nearby competitors.",
    content: `# Restaurant SEO Checklist

## Essentials
- Claim Google Business Profile
- NAP consistency
- Menu schema

## Speed
- Compress images
- Cache aggressively

## Reviews
Ask happy customers. Respond fast.
`,
    readTime: 4,
  },
];

const cls = (...parts) => parts.filter(Boolean).join(" ");

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function computeReadTime(markdown) {
  if (!markdown) return 3;
  const words = markdown.replace(/[#>*`[\]-]/g, "").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 text-xs text-neutral-600 dark:text-neutral-300">
      {children}
    </span>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <div
      className={cls(
        "rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/50 backdrop-blur p-5 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BlogNavbar() {
  return (
    <div className="sticky top-0 z-40 border-b border-neutral-200/70 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <motion.a
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          href="/"
          className="flex items-center gap-1"
        >
          <span className="text-white">
            <span className="text-blue-500">HKS</span>hakib
          </span>
        </motion.a>
        {/* <div className="flex gap-2">
          <Link
            to="/"
            className="px-3 py-1.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800"
          >
            Blog
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export function BlogHome() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [liked, setLiked] = useState(() => new Set());
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => {
      const inCat = category === "All" || p.category === category;
      const text = `${p.title} ${p.excerpt} ${p.tags.join(" ")}`.toLowerCase();
      return inCat && (!q || text.includes(q));
    });
  }, [query, category]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <BlogNavbar />
      <main className="mx-auto max-w-6xl px-4 pt-10 pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <SectionTitle
            title="Pixel & Ink"
            subtitle="Because not all bugs live in code."
          />
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-64 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={cls(
                "px-3 py-1.5 rounded-full border text-sm transition",
                category === c
                  ? "border-neutral-900 dark:border-neutral-100"
                  : "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered[0] && <FeaturedPost post={filtered[0]} />}

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(1).map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <PostCard
                post={post}
                liked={liked.has(post.slug)}
                onToggleLike={() =>
                  setLiked((prev) => {
                    const n = new Set(prev);
                    n.has(post.slug) ? n.delete(post.slug) : n.add(post.slug);
                    return n;
                  })
                }
              />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

function FeaturedPost({ post }) {
  return (
    <Link to={`/blogs/${post.slug}`} className="mt-8 block group">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
        <img
          src={post.cover}
          alt={post.title}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <div className="flex gap-2 mb-3">
            <Chip>{post.category}</Chip>
            {post.tags.slice(0, 2).map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold drop-shadow">
            {post.title}
          </h2>
          <p className="mt-1 opacity-90">{post.excerpt}</p>
          <div className="mt-2 text-sm opacity-80">
            {formatDate(post.date)} •{" "}
            {post.readTime || computeReadTime(post.content)} min read
          </div>
        </div>
      </div>
    </Link>
  );
}

function PostCard({ post, liked, onToggleLike }) {
  return (
    <GlassCard>
      <Link to={`/blogs/${post.slug}`} className="block">
        <div className="overflow-hidden rounded-xl">
          <img
            src={post.cover}
            alt={post.title}
            className="h-44 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Chip>{post.category}</Chip>
          {post.tags.slice(0, 2).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-tight hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 line-clamp-2">
          {post.excerpt}
        </p>
      </Link>
      <div className="mt-3 flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
        <span>
          {formatDate(post.date)} •{" "}
          {post.readTime || computeReadTime(post.content)} min
        </span>
        <button
          onClick={onToggleLike}
          className={cls(
            "rounded-full px-3 py-1 border transition",
            liked
              ? "border-neutral-900 dark:border-neutral-100"
              : "border-neutral-200 dark:border-neutral-800"
          )}
        >
          {liked ? "★ Saved" : "☆ Save"}
        </button>
      </div>
    </GlassCard>
  );
}

export function BlogPostPage() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];
  const headings = useHeadingsFromMarkdown(post.content);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <BlogNavbar />
      <article className="mx-auto max-w-6xl px-4 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <SectionTitle title={post.title} />
          <div className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm">
            {formatDate(post.date)} • {post.category} •{" "}
            {post.readTime || computeReadTime(post.content)} min read
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-72 object-cover"
            />
          </div>

          <ReadingProgress />

          <div className="prose prose-neutral dark:prose-invert max-w-none mt-8 prose-h1:scroll-mt-24 prose-h2:scroll-mt-24 prose-h3:scroll-mt-24">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ]}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <hr className="my-10 border-neutral-200 dark:border-neutral-800" />

          <RelatedPosts currentSlug={post.slug} />
        </div>

        <div className="lg:col-span-4 lg:pl-6">
          <GlassCard className="sticky top-20">
            <h4 className="font-semibold mb-3">On this page</h4>
            <nav className="space-y-1 text-sm">
              {headings.length === 0 && (
                <div className="text-neutral-500">No headings found</div>
              )}
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={cls(
                    "block truncate hover:underline",
                    h.level === 2 && "font-medium",
                    h.level === 3 &&
                      "pl-3 text-neutral-600 dark:text-neutral-300",
                    h.level >= 4 && "pl-6 text-neutral-500"
                  )}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </GlassCard>
        </div>
      </article>
    </div>
  );
}

function useHeadingsFromMarkdown(md) {
  return useMemo(() => {
    const lines = md.split(/\n+/);
    const heads = [];
    for (const line of lines) {
      const m = /^(#{1,6})\s+(.+)$/.exec(line.trim());
      if (m) {
        const level = m[1].length;
        const raw = m[2].replace(/[`*~_]/g, "").trim();
        const id = raw
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .trim()
          .replace(/\s+/g, "-");
        heads.push({ id, text: raw, level });
      }
    }
    return heads;
  }, [md]);
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const p = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="mt-6 h-1 w-full rounded-full bg-neutral-200/60 dark:bg-neutral-800/60">
      <div
        className="h-1 rounded-full bg-neutral-900 dark:bg-neutral-100 transition-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function RelatedPosts({ currentSlug }) {
  const related = POSTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (!related.length) return null;
  return (
    <div className="mt-8">
      <h4 className="font-semibold">Related posts</h4>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {related.map((p) => (
          <Link key={p.slug} to={`/blogs/${p.slug}`} className="block group">
            <div className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <img
                src={p.cover}
                alt={p.title}
                className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-2 text-sm text-neutral-500">
              {formatDate(p.date)}
            </div>
            <div className="font-medium group-hover:underline">{p.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
