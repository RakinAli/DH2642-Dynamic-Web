// Props ska vara en specifikt bok
function DetailsView(props) {
  const image = props.book.volumeInfo.imageLinks;
  const authors = props.book.volumeInfo.authors;
  const language = props.book.volumeInfo.language;
  const description = props.book.volumeInfo.description;
  const forSale = props.book.saleInfo.saleability === "FOR_SALE";
  return (
    <div class="details-container">
      <div class="details-box">
        <img
          class="details-img"
          src={image ? image.thumbnail : "mycollection/png/no-image.png"}
        ></img>
        <div class="details-info">
          <div class="details-wrapper">
            <button
              class="popup"
              onClick={() => {
                props.onShelf(props.book);
                pop("myPopup-1");
              }}
            >
              <span>Add to Bookshelf</span>
              <div>
                <span class="popuptext" id="myPopup-1">
                  Added
                </span>
              </div>
            </button>
            <button
              class="popup"
              onClick={() => {
                props.onWish(props.book);
                pop("myPopup-2");
              }}
            >
              <span>Add to Favourites</span>
              <span class="popuptext" id="myPopup-2">
                Added
              </span>
            </button>
            <button
              class="popup"
              onClick={() => {
                props.onCart(props.book);
                pop("myPopup-3");
              }}
              hidden={!forSale}
            >
              <span>Add to Shoppingbag</span>
              <span class="popuptext" id="myPopup-3">
                Added
              </span>
            </button>
          </div>
          <p>
            <b>Title: </b>
            {props.book.volumeInfo.title} {/*Assuming each book has a title*/}
          </p>
          <p>
            <b>Authors: </b>
            {authors
              ? authors.map((author) => {
                  return <span class="author-info"   onClick={(e) => {
                                  e.preventDefault();
                                  window.location.hash = "#search";
                                }}>{author}, </span>;
                })
              : "No author."}
          </p>
          <p>
            <b>Language: </b>
            {language ? language : "No language."}
          </p>
        </div>
      </div>
      <p class="details-description">
        {description ? description : "No description."}
      </p>
    </div>
  );
}

function pop(popup) {
  var popup = document.getElementById(popup);
  popup.classList.toggle("show");
}
