import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID G_eKRFNJNyDLejJOb1DYw7yL94D6t76xK4sy_c-Y5Vk',
  },
});
