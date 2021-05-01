const contentful = require("contentful");

export default contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACEID,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
});
