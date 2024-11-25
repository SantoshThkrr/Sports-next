export const MENU_QUERY = `
query MenuQuery($slug: Int) {
  categories(where: {parent: $slug}) {
    edges {
      node {
        slug
        name
      }
    }
  }
}
`;
