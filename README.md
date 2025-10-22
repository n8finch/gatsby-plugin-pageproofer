# gatsby-plugin-pageproofer

> [!WARNING]
> This repo is not actively maintained. If you need an update, please file an issue and I'll take a look. Thank you!

A simple plugin that adds `pageproofer.js` to every page on your Gatsby site for your team or clients to review.

## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-pageproofer
```

or

```
npm install gatsby-plugin-pageproofer
```

2. Get the `orgID` and `siteID`

You will need to get your oraganization ID and the site ID from either the JS embed or the URL when you are on the Site page. Where to look:

- In the site URL: `https://app.pageproofer.com/1234/dashboard/5678`
- In the JS embed: `//app.pageproofer.com/overlay/js/5678/1234`

In both of the above, the `orgID` is `1234` and the `siteID` is `5678`.

3. Add to `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-pageproofer`,
      options: {
        orgID: 1234,
        siteID: 5678
      }
    }
  ]
};
```
