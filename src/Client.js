/* eslint-disable no-undef */
function search(query, cb) {
  return fetch("https://robots-and-pencils-john.herokuapp.com/getLaunches", {
    accept: "application/json",
  })
  .then(response => response.json())
  // .then(checkStatus)
  // .then(parseJSON)
  .then(cb);
}

// function checkStatus(response) {
//   console.log(response);
//   console.log(response.body);
//   console.log(response.json());
  
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }

// function parseJSON(response) {
//   return response.json();
// }

const Client = { search };
export default Client;
