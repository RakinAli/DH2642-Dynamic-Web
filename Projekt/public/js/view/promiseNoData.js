function promiseNoData(promise, data, error) {
  if (error) return <span>Some error</span>;
  if (!promise) return <span>No data</span>;
  if (!data)
    return (
      <img
        src={"https://miro.medium.com/max/3600/1*CsJ05WEGfunYMLGfsT2sXA.gif"}
      ></img>
    );
  return null;
}
