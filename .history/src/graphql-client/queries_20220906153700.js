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
