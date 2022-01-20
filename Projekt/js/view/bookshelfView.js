function BookshelfView(props) {
  const books = "allTime";
  const isEmpty =
    props[books].length === 0 ? <p>No books added to bookshelf</p> : false;

  return (
    <div class="bookshelf">
      <span class="bookshelf-header">The world belongs to those who read</span>
      <div class="bookshelf-buttons">
        <div>
          <span onClick={() => (books = "lastMonth")}>LAST MONTH</span>
        </div>
        <div>
          <span onClick={() => (books = "sixMonths")}>LAST 6 MONTHS</span>
        </div>
        <div>
          <span onClick={() => (books = "allTime")}>ALL TIME</span>
        </div>
      </div>

      <div class="shelf-leftBox">
        {isEmpty ||
          [...props[books]].sort(compareDates).map((result) => {
            const image = result.volumeInfo.imageLinks;
            const authors = result.volumeInfo.authors;
            return (
              <span class="shelf-row">
                <img
                  class="shelf-book-img"
                  src={
                    image ? image.thumbnail : "mycollection/png/no-image.png"
                  }
                  onClick={(e) => {
                    props.setCurrentBook(result);
                    e.preventDefault();
                    window.location.hash = "#details";
                  }}
                ></img>
                <span class="shelf-info">
                  <span class="shelf-info1">
                    <p>{result.volumeInfo.title}</p>
                    <p>
                      {authors
                        ? authors.map((author) => {
                            return (
                              <span
                                class="author-info"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.hash = "#search";
                                }}
                              >
                                {author},{" "}
                              </span>
                            );
                          })
                        : "Unknown authors."}
                    </p>
                  </span>
                  <span class="shelf-info2">
                    <p>Date added: </p>
                    {result.date}
                  </span>
                  <span>
                    <button onClick={() => props.removeBook(result)}>X</button>
                  </span>
                </span>
              </span>
            );
          })}
      </div>
    </div>
  );
}
/*Compares the date of two books */
function compareDates(aBook, anotherBook) {
  if (aBook.dateToCompare.year > anotherBook.dateToCompare.year) return +1;
  if (aBook.dateToCompare.year < anotherBook.dateToCompare.year) return -1;
  if (aBook.dateToCompare.month > anotherBook.dateToCompare.month) return +1;
  if (aBook.dateToCompare.month < anotherBook.dateToCompare.month) return -1;
  if (aBook.dateToCompare.day > anotherBook.dateToCompare.day) return +1;
  if (aBook.dateToCompare.day < anotherBook.dateToCompare.day) return -1;
  if (aBook.dateToCompare.minute > anotherBook.dateToCompare.minute) return +1;
  if (aBook.dateToCompare.minute < anotherBook.dateToCompare.minute) return -1;
  return 0;
}
