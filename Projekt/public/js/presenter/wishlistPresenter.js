function WishlistPresenter(props) {
  return (
		<WishlistView
			wish={props.model.books["wish"]}
			removeWish={(book) => props.model.remove(book, "wish")}
			setCurrentBook={(book) => props.model.setCurrentBook(book.id)}
		/>
	);
}
