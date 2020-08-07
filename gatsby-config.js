require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Giorgos Kalmoukis`,
    siteTitleAlt: `Giorgos Kalmoukis`,
    siteHeadline: `Giorgos Kalmoukis`,
    siteUrl: `https://blog.gkalmoukis.com`,
    siteDescription: `I’ve created this blog to share some articles for problems I’m having in my work and occasionally some tutorials add it to your android home screen and you will be able to read without internet connection.`,
    siteLanguage: `en`,
    siteImage: `.static/banner.jpg`,
    author: `@gkalmoukis`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/gkalmoukis`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/giokalm/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Giorgos Kalmoukis Blog`,
        short_name: `blog-gkalmoukis`,
        description: `I’ve created this blog to share some articles for problems I’m having in my work and occasionally some tutorials add it to your android home screen and you will be able to read without internet connection.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
