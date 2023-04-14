import { EDigitalFlop as t } from "./components/digitalFlop/index.js";
import { EFullScreenContainer as n } from "./components/fullScreenContainer/index.js";
import { digitalFlopProps as f } from "./components/digitalFlop/src/digitalFlop.js";
import { fullScreenContainerProps as s } from "./components/fullScreenContainer/src/fullScreenContainer.js";
function i(r) {
  [t, n].forEach((o) => r.component(o.name, o));
}
export {
  t as EDigitalFlop,
  n as EFullScreenContainer,
  i as default,
  f as digitalFlopProps,
  s as fullScreenContainerProps
};
