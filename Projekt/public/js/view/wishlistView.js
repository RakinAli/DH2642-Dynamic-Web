function WishlistView(props) {
  const isEmpty = props.wish.length === 0 ? <p>No books added</p> : false;
  return (
    <div class="wishList-container">
      <div class="wishList-leftBox">
        {isEmpty ||
          props.wish.map((result) => {
            return (
              <span class="wishList-Row">
                <img
                  class="wishList-img"
                  src={
                    result.volumeInfo.imageLinks
                      ? result.volumeInfo.imageLinks.thumbnail
                      : "mycollection/png/no-imagine.png"
                  }
                  onClick={(e) => {
                    props.setCurrentBook(result);
                    e.preventDefault();
                    window.location.hash = "#details";
                  }}
                ></img>
                <span class="wishList-info">
                  <span class="wishList-info1">
                    <p class ="wishList-booktitles">{result.volumeInfo.title}</p>
                    <p>
                      {result.volumeInfo.authors
                        ? result.volumeInfo.authors.map((author) => {
                            return <span class="author-info">{author}, </span>;
                          })
                        : "Unknown Author"}
                    </p>
                  </span>
                  <span class="wishList-info2">
                    <p>Added :</p>
                  </span>
                  <span class="wishList-info3"></span>
                </span>
                <button onClick={() => props.removeWish(result)}>X</button>
              </span>
            );
          })}
      </div>
    </div>
  );
}
