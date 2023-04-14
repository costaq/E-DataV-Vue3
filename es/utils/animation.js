const d = (n, t, a, i) => {
  const c = (a - t) / n;
  let e = t;
  const r = /* @__PURE__ */ new Date();
  i(e);
  const m = () => {
    const s = (/* @__PURE__ */ new Date()).getTime() - r.getTime();
    if (s > n) {
      e = a, i(e);
      return;
    }
    e = t + c * s, i(e), requestAnimationFrame(m);
  };
  requestAnimationFrame(m);
};
export {
  d as animation
};
