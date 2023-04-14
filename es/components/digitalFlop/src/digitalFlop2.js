import { defineComponent as d, ref as c, reactive as v, watch as x, onMounted as $, createVNode as g } from "vue";
import { animation as y } from "../../../utils/animation.js";
/* empty css                   */import { digitalFlopProps as F } from "./digitalFlop.js";
const z = /* @__PURE__ */ d({
  name: "EDigitalFlop",
  props: F,
  setup(t) {
    const l = c("0"), i = c(0), m = v({
      fontFamily: `${t.fontFamily}`,
      fontSize: `${t.fontSize}px`,
      color: t.color
    }), r = () => {
      y(t.duration, i.value, t.value, (e) => {
        l.value = u(e);
      });
    }, u = (e) => {
      const o = e.toFixed(t.decimals), n = String(o).split(".");
      let a = n[0];
      const f = n.length > 1 ? `.${n[1]}` : "", s = /(\d+)(\d{3})/;
      if (t.separator && typeof t.separator != "number")
        for (; s.test(a); )
          a = a.replace(s, "$1" + t.separator + "$2");
      return `${a}${f}`;
    };
    return x(() => t.value, (e, o) => {
      i.value = o, r();
    }), $(() => {
      r();
    }), () => g("span", {
      style: m
    }, [l.value]);
  }
});
export {
  z as default
};
