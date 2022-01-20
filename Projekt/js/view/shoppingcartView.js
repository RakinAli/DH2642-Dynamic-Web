function ShoppingcartView(props) {
  const isEmpty = props.cart.length === 0 ? <p>No books added</p> : false;
  return (
    <div class="shoppingCart-container">
      <span class="shoppingCart-header">
        <p>
          "The buying of more books than one can read is nothing less than the
          soul reaching towards infinity..." - A. Edward Newton
        </p>
      </span>
      <div class="shoppingCart-leftBox">
        {isEmpty ||
          props.cart.map((result) => {
            const image = result.volumeInfo.imageLinks;
            const authors = result.volumeInfo.authors;
            const price = result.saleInfo.listPrice;
            const forSale = result.saleInfo.saleability === "FOR_SALE";
            return (
              <span class="shoppingCart-row">
                <img
                  class="shoppingCart-img"
                  src={
                    image ? image.thumbnail : "mycollection/png/no-image.png"
                  }
                  onClick={(e) => {
                    props.setCurrentBook(result);
                    e.preventDefault();
                    window.location.hash = "#details";
                  }}
                ></img>
                <span class="shoppingCart-info">
                  <span class="shoppingCart-infoOne">
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
                  <span class="shoppingCart-infoTwo">
                    <p>
                      {price ? price.amount + " " + price.currencyCode : ""}
                    </p>
                  </span>
                  <a
                    class="shoppingCart-infoThree"
                    href={forSale ? result.saleInfo.buyLink : ""}
                    target="_blank"
                  >
                    {forSale ? "Buy book" : ""}
                  </a>
                </span>
                <button onClick={() => props.removeBook(result)}>X</button>
              </span>
            );
          })}
      </div>
      <div class="shoppingCart-rightBox">Order summary</div>
    </div>
  );
}
