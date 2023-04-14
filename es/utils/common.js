function c(t) {
  const n = t;
  return n.install = function(o) {
    o.component(n.name, n);
  }, n;
}
export {
  c as withInstall
};
