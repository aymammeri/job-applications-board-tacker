let apiUrl
const apiUrls = {
  production: 'https://thawing-anchorage-80200.herokuapp.com',
<<<<<<< HEAD:src/apiConfig.js
  development: 'https://thawing-anchorage-80200.herokuapp.com'
=======
  development: 'http://localhost:4741'
>>>>>>> dev:src/api/apiConfig.js
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
