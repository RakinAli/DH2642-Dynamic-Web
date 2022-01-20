function ShoppingcartPresenter(props) {
  return (
    <ShoppingcartView
      cart={props.model.books["cart"] || []}
      removeBook={(book) => props.model.remove(book, "cart")}
      setCurrentBook={(book) => props.model.setCurrentBook(book.id)}
    />
  );
}
