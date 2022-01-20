function DetailsPresenter(props) {
  return (
    promiseNoData(
      props.model.currentBook,
      props.model.currentBookDetails,
      props.model.currentBookError
    ) || (
      <DetailsView
        book={props.model.currentBookDetails}
        onShelf={(book, date) => {
          props.model.add(book, "shelf");
        }}
        onWish={(book, date) => {
          props.model.add(book, "wish");
        }}
        onCart={(book, date) => {
          props.model.add(book, "cart");
        }}
      />
    )
  );
}
