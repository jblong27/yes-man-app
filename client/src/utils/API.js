import axios from 'axios';


export default {
  // Gets all activities
  getActivities: function() {
    return axios.get("/api/activities");
  },
  // Gets the book with the given id
  getUserInput: function() {
    return axios.get("/api/userinput");
  },

  saveUserInput: function(userData) {
    return axios.post("/api/userinput", userData);
  }
  
};
