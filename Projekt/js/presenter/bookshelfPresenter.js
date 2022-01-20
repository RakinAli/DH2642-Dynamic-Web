function BookshelfPresenter(props) {
  return (
    <BookshelfView
      lastMonth={
        props.model.books["shelf"].filter((b) => monthChecker(b)) || []
      }
      sixMonths={
        props.model.books["shelf"].filter((b) => sixMonthChecker(b)) || []
      }
      allTime={props.model.books["shelf"] || []}
      removeBook={(book) => props.model.remove(book, "shelf")}
      setCurrentBook={(book) => props.model.setCurrentBook(book.id)}
    />
  );
}

/* Måste kontrollera scrope på month */
function monthChecker(aBook) {
  const date = new Date();
  const lastMonth =
    aBook.dateToCompare.year === date.getFullYear() &&
    aBook.dateToCompare.month === date.getMonth();
  if (lastMonth) return 1;
  return 0;
}

function sixMonthChecker(aBook) {
  const date = new Date();
  const sixMonths =
    date.getFullYear() - aBook.dateToCompare.year <= 1 &&
    (aBook.dateToCompare.month + 6) % 12 > date.getMonth();
  if (sixMonths) return 1;
  return 0;
}
