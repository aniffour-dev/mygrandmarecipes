import React from "react";
import Image from "next/image";
import Link from "next/link";
import { featured_articles } from "@/apis/graphql/articles";

const HeroSection = async () => {
  const posts = await featured_articles();

  if (posts.length < 5) {
    return (
      <p className="py-10 text-center text-slate-500 font-semibold">
        There are no articles yet!{" "}
        <Link
          href="https://dev-mygrandmarecipes.pantheonsite.io/wp-admin/edit.php"
          target="_blank"
          className="text-slate-700 underline"
        >
          Add New
        </Link>
      </p>
    );
  }

  const mainPost = posts[0];
  const sidePosts = posts.slice(1, 6);

  return (
    <section className="max-w-[90%] mx-auto mt-10 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2 relative h-[300px] lg:h-[503px]">
          <Link
            href={`/${mainPost.slug}`}
            aria-label={`View recipe: ${mainPost.title}`}
          >
            <Image
              src={
                mainPost.featuredImage?.node?.sourceUrl || "/default-image.jpg"
              }
              alt={`Featured image for ${mainPost.title}`}
              width={600}
              height={503}
              objectFit="cover"
              className="w-full h-[300px] lg:h-[503px] object-cover rounded-lg"
            />
          </Link>
          <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black to-transparent rounded-lg w-full">
            <span className="bg-lime-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {mainPost.categories.nodes[0]?.name || "Technology"}
            </span>
            <h2 className="text-white text-xl font-bold mt-2">
              {mainPost.title}
            </h2>
            <div className="flex items-center mt-1">
              <span className="text-white text-sm">
                {mainPost.author.node.name}
              </span>
              <span className="text-white text-sm ml-4">
                {new Date(mainPost.date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {sidePosts.map((post, index) => (
            <div key={index} className="relative h-[160px]">
              <Link
                href={`/${post.slug}`}
                aria-label={`View recipe: ${post.title}`}
              >
                <Image
                  src={
                    post.featuredImage?.node?.sourceUrl || "/default-image.jpg"
                  }
                  alt={`Featured image for ${post.title}`}
                  width={300}
                  height={160}
                  objectFit="cover"
                  className="w-full h-[160px] object-cover rounded-lg"
                />
              </Link>
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent rounded-lg w-full">
                <span className="bg-lime-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {post.categories.nodes[0]?.name || "Technology"}
                </span>
                <h3 className="text-white text-sm font-semibold mt-1 line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
