import axios from 'axios';

class API {
  constructor(apiBaseURL, apiKeyURL) {
    this.apiBase = apiBaseURL;
    this.apiKey = apiKeyURL
  }

  async get(params) {
    const result = await axios.get(this.apiBase + params + this.apiKey)

    if (result.status === 200) {
      // console.log("TCL: API -> get -> result.data", result.data)
      console.log("TCL: API -> get -> result", result)
      return result;
    }
  }
}

export default API;