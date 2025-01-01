import React from "react";
import Image from "next/image";
import Link from "next/link";
import { desserts_articles } from "@/apis/graphql/articles";
import { Archivo } from "next/font/google";
import { FaHeart } from "react-icons/fa";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

// Server-side HTML sanitization function
const sanitizeHtml = (html: string) => {
  // Remove HTML tags
  return html.replace(/<[^>]*>/g, "");
};

const truncateContent = (content: string, maxLength: number) => {
  // First sanitize the HTML content
  const sanitizedContent = sanitizeHtml(content);
  // Then truncate
  return sanitizedContent.length > maxLength
    ? `${sanitizedContent.substring(0, maxLength)}...`
    : sanitizedContent;
};

const Block5 = async () => {
  const posts = await desserts_articles();

  return (
    <section
      className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 mb-20"
      aria-label="Wheel Tires Articles"
    >
      <div className="flex justify-center items-center flex-col">
        <h3
          className={`${archivo.className} text-gray-900 font-bold mb-5 text-3xl text-center`}
        >
          Desserts {""}
          <span className="bg-lime-500 rounded text-white pb-0.5 px-2">
            Recipes
          </span>
        </h3>
        <p className="text-slate-700 max-w-[650px] text-center mb-8">
          Indulge in a variety of sweet treats, from cakes and cookies to pies
          and puddings. These dessert recipes are perfect for satisfying your
          sweet cravings.
        </p>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/${post.slug}`} key={post.id}>
                <article className="relative break-inside-avoid">
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
                  <h4 className="text-lg text-black transition-all hover:text-lime-600 font-bold my-2">
                    {post.title}
                  </h4>
                  {/* Replace dangerouslySetInnerHTML with direct text rendering */}
                  <p className="text-slate-700 text-sm mt-1.5">
                    {truncateContent(post.content, 100)}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </section>
  );
};

export default Block5;