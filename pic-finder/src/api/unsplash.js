import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID rRBAtjJHclDE7jloWbT6nfIum8cUO31cmWjJWjkcRic'
  }
})

