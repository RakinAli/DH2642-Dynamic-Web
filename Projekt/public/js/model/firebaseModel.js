function persistModel(model) {
  let loadingFromFirebase = false;
  model.addObserver(function () {
    if (loadingFromFirebase) return;

    firebase.database().ref(`users/${auth.currentUser.uid}/bookProject`).set({
      books: model.books,
      currentBook: model.currentBook,
    });
  });
  firebase
    .database()
    .ref(`users/${auth.currentUser.uid}/bookProject`)
    .on("value", function (data) {
      loadingFromFirebase = true;
      try {
        if (data.val()) {
          model.setBooks(data.val().books);
          model.setCurrentBook(data.val().currentBook || null);
        }
      } catch (e) {
        console.log(e);
      } finally {
        loadingFromFirebase = false;
      }
    });
}
