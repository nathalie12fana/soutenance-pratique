"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    date: "07 Mar 2022",
    title: "How to keep fear from ruining your art business with confident",
    author: {
      name: "David Milar",
      location: "London, United Kingdom",
      avatar: "/img11.png", // mettre l'image
    },
    image: "/img7.png",
    featured: true,
  },
  {
    id: 2,
    date: "07 Mar 2022",
    title: "How to keep fear from ruining your art business with confident",
    image: "/img8.png",
  },
  {
    id: 3,
    date: "07 Mar 2022",
    title: "How to keep fear from ruining your art business with confident",
    image: "/img9.png",
  },
  {
    id: 4,
    date: "07 Mar 2022",
    title: "How to keep fear from ruining your art business with confident",
    image: "/img10.png",
  },
];

export default function PosterComponents() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <p className="text-red-500 font-medium relative  inline-block text-2xl">
            From Our Blog
          </p>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Our Latest News
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article en vedette */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden mb-6">
            <Image
              src={posts[0].image}
              alt={posts[0].title}
              width={800}
              height={500}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <p className="text-gray-500 text-sm">{posts[0].date}</p>
          <h3 className="text-1xl font-semibold mt-2 mb-4">
            {posts[0].title}
          </h3>

          {/* Auteur */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={posts[0].author.avatar}
                alt={posts[0].author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{posts[0].author.name}</p>
                <p className="text-gray-500 text-sm">
                  {posts[0].author.location}
                </p>
              </div>
            </div>

            <a
              href="#"
              className="text-red-500 font-medium flex items-center space-x-1"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Articles à droite */}
        <div className="flex flex-col space-y-8">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="flex space-x-4">
              <div className="w-40 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={160}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h3 className="text-base font-medium line-clamp-2">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-red-500 font-medium flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
