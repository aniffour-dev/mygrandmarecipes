import React from "react";
import Image from "next/image";
import Link from "next/link";
import { quickmeals_articles } from "@/apis/graphql/articles";
import { Archivo } from "next/font/google";
import { FaHeart } from "react-icons/fa";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

const truncateContent = (content: string, maxLength: number) => {
  return content.length > maxLength
    ? content.substring(0, maxLength) + "..."
    : content;
};

const Block3 = async () => {
  const posts = await quickmeals_articles();

  return (
    <section
      className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 mb-24"
      aria-label="Bread Recipes Articles"
    >
      <div className="flex flex-col items-center">
        <h3
          className={`${archivo.className} text-gray-900 font-bold mb-5 text-3xl text-center`}
        >
          Quick Meals {""}
          <span className="bg-lime-500 rounded text-white pb-0.5 px-2">
            Recipes
          </span>
        </h3>
        <p className="text-slate-700 max-w-[600px] text-center mb-8">
          Browse easy and fast recipes perfect for busy days. These quick meals
          are simple to make, delicious, and ready in no time, ideal for any
          hectic schedule.
        </p>
        {posts.length > 0 ? (
          <section className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 space-y-5">
            {posts.map((post) => (
              <Link href={`/${post.slug}`} key={post.id}>
                <article className="relative break-inside-avoid mb-8">
                  <Image
                    src={
                      post.featuredImage?.node?.sourceUrl ||
                      `https://dev-mygrandmarecipes.pantheonsite.io/wp-content/uploads/2024/10/loading.webp`
                    }
                    alt={post.title}
                    title={post.featuredImage?.node.title || post.title}
                    loading="lazy"
                    width={400}
                    height={250}
                    className="w-full h-auto"
                  />
                  <h4 className="text-lg text-lime-700 transition-all hover:text-lime-950 font-bold my-2">
                    {post.title}
                  </h4>
                  <p
                    className="text-slate-700 text-sm mt-1.5"
                    dangerouslySetInnerHTML={{
                      __html: truncateContent(post.seo.metaDesc, 100),
                    }}
                    suppressHydrationWarning={true}
                  />
                </article>
              </Link>
            ))}
          </section>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </section>
  );
};

export default Block3;
