import { defineComponent as d, ref as s, reactive as v, watch as x, onMounted as $, createVNode as g } from "vue";
import { withInstall as y } from "../../utils/common.js";
import { animation as F } from "../../utils/animation.js";
/* empty css            */import { digitalFlopProps as p } from "./digitalFlop.js";
const E = y(/* @__PURE__ */ d({
  name: "EDigitalFlop",
  props: p,
  setup(t) {
    const l = s("0"), i = s(0), c = v({
      fontFamily: `${t.fontFamily}`,
      fontSize: `${t.fontSize}px`,
      color: t.color
    }), r = () => {
      F(t.duration, i.value, t.value, (e) => {
        l.value = u(e);
      });
    }, u = (e) => {
      const a = e.toFixed(t.decimals), n = String(a).split(".");
      let o = n[0];
      const f = n.length > 1 ? `.${n[1]}` : "", m = /(\d+)(\d{3})/;
      if (t.separator && typeof t.separator != "number")
        for (; m.test(o); )
          o = o.replace(m, "$1" + t.separator + "$2");
      return `${o}${f}`;
    };
    return x(() => t.value, (e, a) => {
      i.value = a, r();
    }), $(() => {
      r();
    }), () => g("span", {
      style: c
    }, [l.value]);
  }
}));
export {
  E as EDigitalFlop
};
