const languages = require("./src/languages");

const createWordPressPost = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `);
  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors);
  }

  const { allWpPost } = result.data;

  // Define the template to use
  const postTemplate = require.resolve(`./src/templates/wordpress-post.js`);
  if (allWpPost.nodes.length) {
    allWpPost.nodes.map((post) => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: post.uri,
        component: postTemplate,
        context: post,
      });
    });
  }
};

const createWordPressPage = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `);
  if (result.errors) {
    reporter.error("There was an error fetching pages", result.errors);
  }

  const { allWpPage } = result.data;

  // Define the template to use
  const pageTemplate = require.resolve(`./src/templates/wordpress-page.js`);

  if (allWpPage.nodes.length) {
    allWpPage.nodes.map((post) => {
      const currentLang = languages.langs.find((lang) =>
        post.uri.includes(`/${lang}-`)
      );
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        // special logic for vietnamese post
        path: currentLang ? `/${currentLang}${post.uri}` : post.uri,
        component: pageTemplate,
        context: post,
      });
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createWordPressPost({ actions, graphql, reporter });
  await createWordPressPage({ actions, graphql, reporter });
};
