const Show = {
  data() {
    return {
      hashState: window.location.hash,
    };
  },
  created() {
    this.listener = () => {
      this.hashState = window.location.hash;
      defaultRoute();
    };
    window.addEventListener("hashchange", this.listener);
  },
  unmounted() {
    window.removeEventListener("hashchange", this.listener);
  },
  render() {
    let hidden = this.hashState === this.hash ? "" : "hidden";
    return <div class={hidden}>{this.$slots.default()}</div>;
  },
  props: ["hash"],
};
