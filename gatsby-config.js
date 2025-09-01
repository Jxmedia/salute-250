/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `salute250`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bitter\:400,500,600,700,900`,
          `Poppins\:400,500,600,700`,
          `Pinyon Script\:400`,
          `Mea Culpa\:400`,
        ],
        display: "swap",
      },
    },
  ],
};
