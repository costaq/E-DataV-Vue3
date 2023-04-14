const e = {
  /**
  * @description full 全部拉伸 | full-width 宽度拉伸 | full-height 高度拉伸 | initial 初始化默认不拉伸
  */
  type: {
    type: String,
    required: !1,
    default: "full"
  },
  /**
   * @description 大屏设计稿宽度
   */
  width: {
    type: Number,
    required: !1,
    default: 1920
  },
  /**
   * @description 大屏设计稿高度
   */
  height: {
    type: Number,
    required: !1,
    default: 1080
  }
};
export {
  e as fullScreenContainerProps
};
