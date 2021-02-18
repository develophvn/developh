const settings = {
  name: "ui",
  state: {
    frontity: {
      url: "https://developh.wordpress.com",
      title: "Test Developh Blog",
      description: "WordPress installation for Developh development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [["Home", "/"]],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://developh.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
