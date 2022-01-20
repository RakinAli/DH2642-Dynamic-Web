function SearchFromView(props) {
  return (
    <div>
      {/* onInput for continuous update and onChange for an update when the enter
      key is pressed in Vue */}
      <div class="searchBox">
        <input
          class="searcher"
          placeholder="Search Book, Author or ISBN... Press Enter to search"
          onInput={(evt) => props.onText(evt.target.value)}
          onChange={() => props.onSearch()}
        ></input>
      </div>
    </div>
  );
}

/*Denna vy visar resultaten av en sökning*/
function SearchResultsView(props) {
  return (
    <div class="searchResult">
      {props.searchResults.map((result) => {
        const image = result.volumeInfo.imageLinks;
        return (
          <span
            class="searchResult-box"
            key={result.id}
            /*Tar oss till details-views */
            onClick={() => {
              props.bookChosen(result.id);
              window.location.hash = "#details";
            }}
          >
            <img
              class="searchResult-picture"
              src={image ? image.thumbnail : "mycollection/png/no-image.png"}
              height="100"
            />
            <span class="searchResult-title" title={result.volumeInfo.title}>
              {title(result.volumeInfo.title)}
            </span>
          </span>
        );
      })}
    </div>
  );
}

function title(string) {
  const sub = string.substring(50, string.length);
  const index = sub.indexOf(" ") < 0 ? sub.length : sub.indexOf(" ");
  return string.length > 50
    ? string.substring(0, 50) + sub.substring(0, index) + "..."
    : string;
}
