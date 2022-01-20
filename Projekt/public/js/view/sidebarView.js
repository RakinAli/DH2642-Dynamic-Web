function SidebarView(props) {
  return (
    <div class="sidebar-icons">
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = "#search";
        }}
      >
        <img src="mycollection/png/search.png"></img>
        <span>Search</span>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = "#bookshelf";
        }}
      >
        <img src="mycollection/png/books.png"></img>
        <span>My Bookshelf</span>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = "#wishlist";
        }}
      >
        <img src="mycollection/png/heart.png"></img>
        <span>My Favourites</span>
      </a>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          window.location.hash = "#shoppingcart";
        }}
      >
        <img src="mycollection/png/shopping-cart.png"></img>
        <span>Shoppingbag</span>
      </a>
      <a href="" onClick={() => auth.signOut()}>
        <img src="mycollection/png/exit.png"></img>
        <span>Sign Out</span>
      </a>
    </div>
  );
}
