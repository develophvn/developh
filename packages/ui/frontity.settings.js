const settings = {
  name: "ui",
  state: {
    frontity: {
      url: "https://develophvn.tech",
      title: "Developh Vietnam",
      description: "Building the best developers",
    },
  },
  packages: [
    {
      name: "developh-theme",
      state: {
        theme: {
          menu: [],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "http://develophvn.org/wp-json",
          homepage: "/home/",
          postsPage: "/blogs/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
