const postFieldsFragmentString = `
  slug
  title
  databaseId
  date
  featuredImage {
    node {
      sourceUrl
      title
    }
  }
  categories {
    edges {
      node {
        slug
        name
      }
    }
  }
`;

export const homePageNews = `
  query HomePageNews {
    latest: posts(where: {categoryId: ${process.env.NEXT_PUBLIC_WORDPRESS_CATEGORY_ID}}, first: 3000) {
      edges {
        node {
          ${postFieldsFragmentString}
        }
        cursor
      }
    }
  }
`;

export const getPostsQuery = `
  query GetPosts {
    posts (where: {categoryName: "tollywood"}, first: 3000){
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

export const loadMorePostsQuery = `
  query GetPosts($cursor: String) {
    posts(first: 10, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

export const getCategoryPosts = `
  query GetCatergoryPosts ($slug: String) {
    posts(where: {categoryName: $slug}) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

export const getLoadMoreCategoryPageData = `
  query GET_LOADMORE_CATEGORY_POSTS($slug: String $after: String)  {
    posts(first: 10, after: $after, where: {categoryName: $slug}) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

export const getTagPosts = `
  query GetCatergoryPosts ($slug: String) {
    posts(where: {tag: $slug, categoryId: ${process.env.NEXT_PUBLIC_WORDPRESS_CATEGORY_ID} }) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

export const getLoadMoreTagPosts = `
  query GET_LOADMORE_TAG_POSTS($slug: String $after: String)  {
    posts(first: 20, after: $after, where: {tag: $slug, categoryId: ${process.env.NEXT_PUBLIC_WORDPRESS_CATEGORY_ID}}) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

export const getAuthorPosts = `
  query GetAuthorPosts($slug: String, $userId: ID!) {
    posts(where: { authorName: $slug, categoryId: ${process.env.NEXT_PUBLIC_WORDPRESS_CATEGORY_ID}}) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
    user(idType: SLUG, id: $userId) {
      firstName
      avatar {
        url
      }
      lastName
      description
      seo {
        social {
          instagram
          twitter
          facebook
          linkedIn
        }
      }
    }
  }
`;

export const getLoadAuthorPosts = `
  query GET_LOADMORE_AUTHOR_POSTS($slug: String $after: String)  {
    posts(first: 20, after: $after, where: { authorName: $slug, categoryId: ${process.env.NEXT_PUBLIC_WORDPRESS_CATEGORY_ID} }) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ${postFieldsFragmentString}
        }
      }
    }
  }
`;

// Export any additional queries as needed.
