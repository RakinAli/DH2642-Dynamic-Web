const SearchPresenter = {
  data() {
    return {
      promise: null,
      searchData: null,
      error: null,
      searchGenre: "",
      searchQuery: "",
    };
  },
  created() {
    this.promise = GoogleBooks.searchBooks({});
  },
  render() {
    return (
      <div>
        <div>
          <SearchFromView
            genres={[]}
            onSearch={() => {
              this.promise = GoogleBooks.searchBooks({
                q: this.searchQuery /*Lägg till searchGenre*/,
              });
            }}
            onText={(txt) => (this.searchQuery = txt)}
            onBookGenre={(bookGenre) => (this.searchGenre = bookGenre)}
          />
        </div>
        <div>
          {promiseNoData(this.promise, this.searchData, this.error) || (
            <SearchResultsView
              searchResults={this.searchData}
              bookChosen={(id) => {
                this.model.setCurrentBook(id);
              }}
            />
          )}
        </div>
      </div>
    );
  },
  props: ["model"],
  watch: {
    promise: {
      immediate: true,
      handler() {
        this.searchData = this.error = null;
        if (this.promise) {
          const p = this.promise;
          this.promise
            .then((dt) => {
              if (this.promise === p) this.searchData = dt;
            })
            .catch((er) => {
              if (this.promise === p) this.error = er;
            });
        }
      },
    },
  },
};
