/*Documentation: https://developers.google.com/books/docs/v1/using#RetrievingVolume*/

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

const GoogleBooks = {
  apiCall(params) {
    return fetch(BASE_URL + params, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) return response;
        else throw new Error(response.statusText);
      })
      .then((response) => response.json());
  },

  searchBooks(params) {
    if (!params.q) params.q = "";
    return GoogleBooks.apiCall(
      "?q=${" + params.q + "}" + "&printType=books"
    ).then((data) => data.items);
  },

  getBookDetails(id) {
    return GoogleBooks.apiCall("/" + id);
  },
};
