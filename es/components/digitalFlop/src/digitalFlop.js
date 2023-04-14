const r = {
  /**
  * @description 终止值
  */
  value: {
    type: Number,
    required: !1,
    default: 1e3
  },
  /**
   * @description 小数点保留几位
   */
  decimals: {
    type: Number,
    required: !1,
    default: 0,
    validator(e) {
      return e >= 0;
    }
  },
  /**
   * @description 持续时间
   */
  duration: {
    type: Number,
    required: !1,
    default: 3e3
  },
  /**
   * @description 字体大小
   */
  fontSize: {
    type: Number,
    required: !1,
    default: 50
  },
  /**
   * @description 字体库 内置 electronic
   */
  fontFamily: {
    type: String,
    required: !1,
    default: "electronic"
    //'electronic'
  },
  /**
   * @description 字体颜色
   */
  color: {
    type: String,
    required: !1,
    default: "#000"
  },
  /**
   * @description 千位分隔符
   */
  separator: {
    type: String,
    required: !1,
    default: ""
  }
};
export {
  r as digitalFlopProps
};
