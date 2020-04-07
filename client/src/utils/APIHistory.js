import axios from  'axios';

export const getHistory = () =>{
    return axios.get('/api/history'); 
}

export const saveHistory = historyData => {
  console.log("at savehistory: ",historyData);
      return axios.post('/api/history', historyData);
}

export default {   
    getHistory,
    saveHistory
}










// import axios from "axios";

// export  default {
// // Saves a history to the database
//   saveHistory: function(historyData) {
//   // console.log("reached APIhistory.js")
//   return axios.post("/api/history", historyData);
//   },
//   // Gets all history
//   getHistory: function() {
//     return axios.get("/api/history");
//   },
//   // Gets the history with the given id
//   getHistoryId: function(id) {
//     return axios.get("/api/history/" + id);
//   },
//   // Deletes the history with the given id
//   deleteHistory: function(id) {
//     return axios.delete("/api/history/" + id);
//   }
  
// };
