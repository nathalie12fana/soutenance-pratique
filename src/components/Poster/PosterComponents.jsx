"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    date: "07 Mar 2022",
    title: "How to keep fear from ruining your art business with confidence",
    author: {
      name: "David Milar",
      location: "London, United Kingdom",
      avatar: "/img11.png",
    },
    image: "/img7.png",
    featured: true,
  },
  {
    id: 2,
    date: "07 Mar 2022",
    title: "5 Strategies to Build a Consistent Creative Routine",
    image: "/img8.png",
  },
  {
    id: 3,
    date: "07 Mar 2022",
    title: "Balancing Creativity and Productivity in Your Work",
    image: "/img9.png",
  },
  {
    id: 4,
    date: "07 Mar 2022",
    title: "Overcoming Creative Blocks: What Really Works",
    image: "/img10.png",
  },
];

export default function PosterComponents() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
     
      <div className="mb-12 text-center">
        <p className="text-red-500 font-semibold text-lg tracking-wide uppercase">
          From Our Blog
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
          Our Latest News
        </h2>
        <p className="text-gray-500 mt-2">
          Stay inspired with our latest insights and creative tips.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <motion.div
          className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden group">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              width={800}
              height={500}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="p-6 md:p-8">
            <p className="text-gray-500 text-sm">{posts[0].date}</p>
            <h3 className="text-2xl font-semibold mt-2 mb-5 text-gray-800 leading-snug hover:text-red-500 transition-colors">
              {posts[0].title}
            </h3>

            {/* Auteur */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src={posts[0].author.avatar}
                  alt={posts[0].author.name}
                  width={45}
                  height={45}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">{posts[0].author.name}</p>
                  <p className="text-gray-500 text-sm">{posts[0].author.location}</p>
                </div>
              </div>

              <a
                href="#"
                className="text-red-500 font-medium flex items-center space-x-1 hover:translate-x-1 transition-transform"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

       
        <div className="flex flex-col space-y-8">
          {posts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              className="flex space-x-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={160}
                  height={112}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-base font-medium line-clamp-2 text-gray-800 hover:text-red-500 transition-colors">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-red-500 font-medium flex items-center space-x-1 hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
