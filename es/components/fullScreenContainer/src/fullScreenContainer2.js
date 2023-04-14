import { defineComponent as h, onBeforeMount as s, createVNode as w, Fragment as m } from "vue";
import { fullScreenContainerProps as u } from "./fullScreenContainer.js";
const y = /* @__PURE__ */ h({
  name: "EFullScreenContainer",
  props: u,
  setup(e, {
    slots: d
  }) {
    const c = () => {
      const o = (document.documentElement.clientWidth || window.screen.width) / e.width, l = (document.documentElement.clientHeight || window.screen.height) / e.height;
      let t = "1", n = "overflow: hidden";
      switch (e.type) {
        case "full":
          t = `${o}, ${l}`, n = "overflow: hidden";
          break;
        case "full-width":
          t = `${o}, ${o}`, n = "overflow-y: scroll";
          break;
        case "full-height":
          t = `${l}, ${l}`, n = "overflow-x: scroll";
          break;
        case "initial":
          t = "1", n = "overflow: auto";
          break;
      }
      let r = `body{transform: scale(${t}); 
                height: ${e.height + "px"}; width: ${e.width}px; 
                transform-origin: left top; ${n};}`;
      const a = document.getElementsByTagName("head")[0];
      let i = document.createElement("style");
      i.type = "text/css", i.appendChild(document.createTextNode(r)), a.appendChild(i);
    };
    return s(() => {
      c(), window.onresize = () => c();
    }), () => w(m, null, [d.default && d.default()]);
  }
});
export {
  y as default
};
