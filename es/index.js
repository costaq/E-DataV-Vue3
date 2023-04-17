import { EDigitalFlop as t } from "./components/digitalFlop/index.js";
import { EFullScreenContainer as a } from "./components/fullScreenContainer/index.js";
function c(n) {
  [t, a].forEach((o) => n.component(o.name, o));
}
export {
  t as EDigitalFlop,
  a as EFullScreenContainer,
  c as default
};
