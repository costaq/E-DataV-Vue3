/*
 * @Autor: costa
 * @Date: 2023-07-13 13:45:46
 * @LastEditors: costa
 * @LastEditTime: 2023-08-02 15:57:51
 * @Description: Tab组件
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { ExtractPropTypes, computed, defineComponent, onMounted, reactive, ref, watch, PropType, VNode } from "vue";
import { genNonDuplicateID, withInstall } from "../../utils/common";
import { ItemBorder, ItemIcon, ItemText, Tab, ItemContent, TabItem } from './tab';
import { useResize, DomSize } from "../../hooks/useResize";
import { ThemeProvider } from "vue3-styled-components";

type TabItemValue = string | number;

export type TabItem = {
    /**
     * @description 显示值
     */
    label: string;
    /**
     * @description 选中值
     */
    value: TabItemValue;
    /**
     * @description 图标
     */
    icon?: () => VNode | VNode;
}

const tabProps = {
    /**
     * @description 当前值
     */
    value: {
        type: [String, Number],
        required: false
    },
    /**
     * @description tab item项
     */
    items: {
        type: Array<TabItem>,
        required: true,
        default: () => []
    },
    /**
     * @description 列数
     */
    columns: {
        type: Number,
        require: false,
        default: 3
    },
    /**
     * @description 间距
     */
    margin: {
        type: Number,
        require: false,
        default: 10
    },
    /**
     * @description 字号
     */
    fontSize: {
        type: Number,
        require: false,
        default: 16
    },
    /**
     * @description 字体颜色
     */
    fontColor: {
        type: String,
        require: false,
        default: '#fff'
    },
    /**
     * @description 背景颜色
     */
    backgroundColor: {
        type: String,
        require: false,
        default: 'transparent'
    },
    /**
     * @description 动画持续时间
     */
    duration: {
        type: Number,
        required: false,
        default: 3
    },
    /**
     * @description 边框渐变颜色
     */
    borderColors: {
        type: Array<string>,
        required: false,
        default: () => ['#1CE3B6', '#1F38F1', '#F95A5A']
    }
}

export type ETabProps = ExtractPropTypes<typeof tabProps>;

export const ETab = withInstall(defineComponent({
    name: 'ETab',
    props: tabProps,
    setup(props, { emit }) {
        const { items, columns, margin, fontColor, fontSize, duration, value, backgroundColor, borderColors } = props;
        const { domRef, domSize } = useResize();
        const symbolId = genNonDuplicateID();
        const selectedValue = ref<TabItemValue>();
        const rows = Math.ceil(items.length / columns);

        onMounted(() => {
            initSelectedValue();
        });

        // 计算tab item尺寸
        const itemSize = computed<DomSize>(() => {
            return {
                width: domSize.width > 0 ? domSize.width / columns - margin * 2 : 0,
                height: domSize.height > 0 ? domSize.height / rows - margin * 2 : 0
            }
        });

        // 监听items变化，重新初始化选中值
        watch(() => items, (newValue) => {
            initSelectedValue();
        });

        // 监听value变化，更改选中值
        watch(() => value, (newValue) => {
            selectedValue.value = newValue;
        });

        // 初始化选中值
        const initSelectedValue = () => {
            if (value) {
                selectedValue.value = value;
            }
            else if (items && items.length > 0) {
                selectedValue.value = items[0].value;
            }
        }

        const handleClick = (e: Event, value: TabItemValue) => {
            e.stopPropagation();
            selectedValue.value = value;
            // 将选中值传递给父组件
            emit('change', value);
        }

        return () => (
            <ThemeProvider class="e-tabs" style="position:relative;width:100%;height:100%;" theme={{}}>
                <Tab symbolId={symbolId} length={itemSize.value.width + itemSize.value.height} ref={domRef}>
                    {
                        items.map(item => (
                            <TabItem class={selectedValue.value === item.value ? 'active' : ''}
                            key={`${item.value}`} margin={margin} width={itemSize.value.width} height={itemSize.value.height} duration={duration}
                            backgroundColor={backgroundColor} symbolId={symbolId}
                            onClick={($event) => handleClick($event, item.value)}>
                                <ItemBorder
                                    version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                                    <defs>
                                        {/* 模糊 */}
                                        <filter id={`svg-blur-${symbolId}`} x="0" y="0" width={itemSize.value.width} height={itemSize.value.height}>
                                            <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
                                            <feGaussianBlur in="offOut" result="blurout" stdDeviation="5" />
                                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                                        </filter>
                                        {/* 渐变颜色 */}
                                        <linearGradient id={`svg-gradient-${symbolId}`} gradientUnits="userSpaceOnUse" x1="0%" y1="100%" x2="100%" y2="0%">
                                            {
                                                borderColors.map((color, index) => <stop offset={`${index / (borderColors.length - 1) * 100}%`} stop-color={color} />)
                                            }
                                        </linearGradient>
                                    </defs>
                                    <rect filter={`url(#svg-blur-${symbolId})`} stroke={`url(#svg-gradient-${symbolId})`} rx="10"></rect>
                                    {/* <text x={itemSize.value.width / 2} y={itemSize.value.height / 2}>{item.label}</text> */}
                                </ItemBorder>
                                <ItemContent fontSize={fontSize} fontColor={fontColor}>
                                    <ItemIcon>{typeof item.icon === 'function' ? item.icon() : item.icon}</ItemIcon>
                                    <ItemText>{item.label}</ItemText>
                                </ItemContent>
                            </TabItem>
                        ))
                    }
                </Tab>
            </ThemeProvider>

        );
    },
}));