let apiUrl
const apiUrls = {
  production: 'https://thawing-anchorage-80200.herokuapp.com',
  development: 'https://thawing-anchorage-80200.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
