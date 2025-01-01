import { gql } from "graphql-request";
import { client } from "@/apis/graphql/graphql-client";

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  seo: {
    metaDesc: string;
    title: string;
    opengraphPublishedTime: string;
    opengraphModifiedTime: string;
  };
  slug: string;
  author: {
    node: {
      name: string;
    };
  };
  categories: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  featuredImage: {
    node: {
      sourceUrl: string;
      altText: string;
      title: string;
    };
  } | null;
}

interface PostsQueryResult {
  posts: {
    nodes: Post[];
  };
}

// Main Dishes Queries
const MainDishes = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Main Dishes"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Main Dishes Posts
export async function maindishes_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(MainDishes);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

const QuickMeals = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Quick Meals"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Quick Meals Posts
export async function quickmeals_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(QuickMeals);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

// Desserts Queries
const Desserts = gql`
  query GetPosts {
    posts(
      first: 6
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: "Desserts"
        status: PUBLISH
      }
    ) {
      nodes {
        id
        title
        content
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Desserts Recipes Posts
export async function desserts_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(Desserts);
    return data.posts.nodes;
  } catch {
    return [];
  }
}

const FeaturedArticles = gql`
  query GetPosts {
    posts(
      first: 6
      where: { status: PUBLISH }
    ) {
      nodes {
        id
        title
        content
        date
        slug
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            title
          }
        }
        seo {
          metaDesc
          title
          opengraphPublishedTime
          opengraphModifiedTime
        }
      }
    }
  }
`;

// Featured Articles
export async function featured_articles(): Promise<Post[]> {
  try {
    const data = await client.request<PostsQueryResult>(FeaturedArticles);
    return data.posts.nodes;
  } catch {
    return [];
  }
}
