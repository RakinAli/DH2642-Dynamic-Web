function defaultRoute() {
  if (
    !["#bookshelf", "#details", "#search", "#shoppingcart", "#wishlist"].find(
      (knownRoute) => window.location.hash === knownRoute
    )
  )
    window.location.hash = "#search";
}

function App(props) {
  defaultRoute();
  return (
    <div class="container">
      <div class="sidebar">
        <SidebarPresenter model={props.model} />
      </div>
      <div class="main">
        <Show hash="#bookshelf">
          <BookshelfPresenter model={props.model} />
        </Show>
        <Show hash="#details">
          <DetailsPresenter model={props.model} />
        </Show>
        <Show hash="#search">
          <SearchPresenter model={props.model} />
        </Show>
        <Show hash="#shoppingcart">
          <ShoppingcartPresenter model={props.model} />
        </Show>
        <Show hash="#wishlist">
          <WishlistPresenter model={props.model} />
        </Show>
      </div>
    </div>
  );
}
