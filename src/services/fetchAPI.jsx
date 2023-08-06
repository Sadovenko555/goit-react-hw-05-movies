
class MovieAPI  {
    constructor() {
      this.apiKEY = '62a7cdfe8b4c1ec0214219fd4a0d9f1e';
      this.baseURL = 'https://api.themoviedb.org/3';
    }
  
   
    async fetchTrendsMovies() {
      const URL = `${this.baseURL}/trending/all/day?api_key=${this.apiKEY}`
  
       try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
    }
  
  
    async movieByQuery(value) {
      const URL = `${this.baseURL}/search/movie?api_key=${this.apiKEY}&query=${value}`
  
       try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
    }
  
  
    async MovieById(id) {
      const URL = `${this.baseURL}/movie/${id}?api_key=${this.apiKEY}`
  
        try {
          const response = await fetch(URL);
          
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
          const data = await response.json();
          
          return data;
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
    }
  
      async CastById(id) {
      const URL = `${this.baseURL}/movie/${id}/credits?api_key=${this.apiKEY}`
  
        try {
          const response = await fetch(URL);
          
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
          const data = await response.json();
          
          return data;
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
      }
    
  
      async ReviewsById(id) {
      const URL = `${this.baseURL}/movie/${id}/reviews?api_key=${this.apiKEY}`
  
        try {
          const response = await fetch(URL);
          
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
          const data = await response.json();
          
          return data;
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
      }
  
  
  
  }
  
  export default MovieAPI;
  
    
      