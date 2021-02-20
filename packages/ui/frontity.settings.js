import { config } from "dotenv";

config();

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
        env: {
          IFRAME_URL: process.env.IFRAME_URL || "http://localhost:3005",
        },
        theme: {
          menu: [
            ["Home", "/"],
            ["Blogs", "/blogs/"],
            ["About Us", "/about-us/"],
          ],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://develophvn.org/wp-json",
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
