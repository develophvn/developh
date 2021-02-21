module.exports = {
  siteMetadata: {
    title: "Developh Vietnam",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://develophvn.org/graphql",
        type: {
          __all: {
            limit: process.env.NODE_ENV === `development` ? 50 : null,
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        // You can pass options to Styletron.
        // Prefix all generated classNames:
        prefix: "_",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-YEVKRQ214M",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-layout",
    "gatsby-plugin-lodash",
    "gatsby-plugin-fontawesome-css",
  ],
};
