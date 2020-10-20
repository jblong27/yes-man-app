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

  saveUserInput: function(activity) {
    return axios.post("/api/userinput" + activity);
  }
  
};
