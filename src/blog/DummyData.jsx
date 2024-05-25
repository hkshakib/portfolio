import BlogPhoto1 from "../blog/static/images/photo1.webp";
import BlogPhoto2 from "../blog/static/images/photo2.webp";
import BlogPhoto3 from "../blog/static/images/photo3.webp";
import BlogPhoto4 from "../blog/static/images/photo4.webp";
import BlogPhoto5 from "../blog/static/images/photo5.webp";
import BlogPhoto6 from "../blog/static/images/photo6.webp";
import BlogPhoto7 from "../blog/static/images/photo7.webp";

const blogs = [
  {
    id: 1,
    title: "The Importance of Effective Communication in the Workplace",
    author: "hkshakib",
    content:
      "Effective communication is crucial for fostering a positive work environment and improving productivity.",
    date: "May 20, 2024",
    category: "Programming",
    views: 121,
    photo: BlogPhoto1,
  },
  {
    id: 2,
    title: "10 Tips for Successful Remote Work",
    author: "hkshakib",
    content:
      "With the rise of remote work, it's important to establish effective strategies to stay productive and maintain work-life balance. Here are 10 tips for successful remote work:...",
    date: "May 22, 2024",
    category: "Programming",
    views: 159,
    photo: BlogPhoto2,
  },
  {
    id: 3,
    title: "The Benefits of Regular Exercise",
    author: "hkshakib",
    content:
      "Regular exercise has numerous benefits for both physical and mental health. It helps improve cardiovascular health, boost mood, reduce stress, and increase overall energy levels.",
    date: "May 25, 2024",
    category: "Artificial Intelligence",
    views: 166,
    photo: BlogPhoto3,
  },
  {
    id: 4,
    title: "Introduction to Machine Learning",
    author: "hkshakib",
    content:
      "Machine learning is a branch of artificial intelligence that enables computers to learn from data and make predictions without being explicitly programmed. .",
    date: "May 28, 2024",
    category: "Programming",
    views: 1311,
    photo: BlogPhoto4,
  },
  {
    id: 5,
    title: "The Art of Cooking",
    author: "hkshakib",
    content:
      "Cooking is not just about preparing food; it's a form of art that allows individuals to express their creativity and explore different flavors and cuisines.",
    date: "June 1, 2024",
    category: "Thoughts",
    views: 1211,
    photo: BlogPhoto5,
  },
  {
    id: 6,
    title: "Tips for Improving Time Management Skills",
    author: "hkshakib",
    content:
      "Effective time management is essential for achieving goals, staying organized, and reducing stress. Here are some tips to help you improve your time management skills:...",
    date: "June 5, 2024",
    category: "Programming",
    views: 12112,
    photo: BlogPhoto6,
  },
  {
    id: 7,
    title: "The Benefits of Mindfulness Meditation",
    author: "hkshakib",
    content:
      "Mindfulness meditation is a practice that involves focusing on the present moment without judgment. It has been shown to reduce stress, improve emotional well-being.",
    date: "June 8, 2024",
    category: "Mobile Development",
    views: 221,
    photo: BlogPhoto7,
  },
  {
    id: 8,
    title: "Exploring the Wonders of Nature",
    author: "hkshakib",
    content:
      "Nature offers a wealth of beauty and inspiration. From majestic mountains to serene beaches, there's something awe-inspiring about the great outdoors.",
    date: "June 12, 2024",
    category: "Programming",
    views: 431,
    photo: BlogPhoto1,
  },
  {
    id: 9,
    title: "The Power of Positive Thinking",
    author: "hkshakib",
    content:
      "Positive thinking can have a profound impact on our lives. It can improve mental health, increase resilience, and help us cope with challenges more effectively.",
    date: "June 15, 2024",
    category: "Thoughts",
    views: 1255,
    photo: BlogPhoto2,
  },
  {
    id: 10,
    title: "Unlocking Creativity: Tips and Techniques",
    author: "hkshakib",
    content:
      "Creativity is a valuable skill that can be developed and nurtured over time. Whether you're an artist, writer.",
    date: "June 18, 2024",
    category: "Web Developing",
    views: 671,
    photo: BlogPhoto3,
  },
  {
    id: 11,
    title: "The Science of Sleep",
    author: "hkshakib",
    content:
      "Sleep plays a vital role in our physical and mental health. It helps restore energy, consolidate memories.",
    date: "June 22, 2024",
    category: "Science",
    views: 1231,
    photo: BlogPhoto4,
  },
  {
    id: 12,
    title: "Effective Strategies for Stress Management",
    author: "hkshakib",
    content:
      "Stress is a common part of life, but it's important to have effective strategies for managing it. reduce stress and improve quality of life.",
    date: "June 25, 2024",
    category: "Thoughts",
    views: 12133,
    photo: BlogPhoto5,
  },
];

const generateContent = () => {
  let content = "";
  for (let i = 0; i < 100; i++) {
    content += "This is line " + (i + 1) + " of the blog content.\n";
  }
  return content;
};

// Generate content for each blog
blogs.forEach((blog) => {
  blog.content = generateContent();
});



export default blogs;
