const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: "/blog/" + slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug
        }
      });
    });
  });
};

//---------------------------------------------------
// Instead of importing as follows:
//
//    import Header from '../../components/Header'
//
// wouldn't it be nice to use a more readable form:
//
//    import Header from 'components/Header':
//---------------------------------------------------
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
