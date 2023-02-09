import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($id: ID!) {
    user(id: $id) {
      id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
