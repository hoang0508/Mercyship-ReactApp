import { gql } from "@apollo/client";

// collection
export const getCategories = gql`
  query GET_CATEGORIES {
    categories {
      edges {
        node {
          databaseId
          name
          slug
          count
          acfMediaCategory {
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

// assets
export const getPostAsssest = gql`
  query GET_POST($where: RootQueryToPostConnectionWhereArgs) {
    posts(where: $where) {
      edges {
        node {
          databaseId
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            edges {
              node {
                databaseId
              }
            }
          }
          acfMedia {
            type
            image {
              sourceUrl
              description
            }
            document {
              mediaItemUrl
              description
            }
            video {
              mediaItemUrl
              description
            }
            videoUrl
          }
        }
      }
    }
  }
`;
