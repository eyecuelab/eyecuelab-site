import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "./src/images/b-eyecuelogo.png"
    }
  },

  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: require("sass"),
      sassOptions: {
        precision: 6,
      },
    },
  },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-postcss'
  ]
}

export default config
