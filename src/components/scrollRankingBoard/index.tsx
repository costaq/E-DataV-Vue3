import { ExtractPropTypes, PropType, computed, defineComponent, onMounted, ref, watch, watchEffect } from "vue";
import { withInstall } from "../../utils/common";
import { useResize } from "../../hooks/useResize";
import { GlobalBox } from "../styled/GlobalBox";
import { BoardItem, BoardItemIcon, BoardItemLabel, BoardItemValue, BoardItemShadow } from "./board";

export type ScrollRankingBoardItem = {
    label: string;
    value: number;
    [key: string]: any;
}

type ScrollRankingBoardItemWithHeight = ScrollRankingBoardItem & {
    height: number;
    ranking: number;
    scroll: number;
}

const scrollRankingBoardProps = {
    /**
     * @description 数据
     */
    items: {
        type: Array as PropType<ScrollRankingBoardItem[]>,
        default: () => []
    },
    /**
     * @description 显示的行数
     */
    rowNum: {
        type: Number,
        default: 5
    },
    /**
     * @description 滚动间隔
     */
    interval: {
        type: Number,
        default: 3000
    },
    /**
     * @description 滚动类型
     */
    type: {
        type: String,
        default: 'single',
        validator(value: string) {
            return ['single', 'page'].includes(value);
        }
    },
    /**
     * @description 高亮行数
     */
    highlightRowNum: {
        type: Number,
        default: 3
    },
    /**
     * @description 高亮颜色
    */
    highlightColors: {
        type: Array as PropType<string[]>,
        default: () => ['#1e80ff', '#4cc7f3', '#CDDC39']
    },
    /**
     * @description 排名字号
     */
    rankingFontSize: {
        type: Number,
        default: 18
    },
    /**
     * @description 文本字号
     */
    labelFontSize: {
        type: Number,
        default: 14
    },
    /**
     * @description 值字号
     */
    valueFontSize: {
        type: Number,
        default: 18
    },
    /**
     * @description 字体颜色
     */
    color: {
        type: String,
        default: '#fff'
    }
}

export type EScrollRankingBoardProps = ExtractPropTypes<typeof scrollRankingBoardProps>;

export const EScrollRankingBoard = withInstall(defineComponent({
    name: 'EScrollRankingBoard',
    props: scrollRankingBoardProps,
    setup(props, { emit }) {
        const { interval, rowNum, type, rankingFontSize, labelFontSize, valueFontSize, highlightColors, highlightRowNum, color } = props;
        const { domRef, domSize } = useResize();
        // 所有数据
        const allData = ref<ScrollRankingBoardItemWithHeight[]>([]);
        /// 显示的数据
        const domData = ref<ScrollRankingBoardItemWithHeight[]>([]);
        // 平均高度
        const avgHeight = ref<number>(0);
        const timer = ref<any>(null);

        // 监听items变化，重新开始动画
        watch(() => props.items, (newVal) => {
            clearTimeout(timer.value);
            init();
        });

        // 监听dom尺寸变化, 重新计算每个item的高度
        watch(domSize, (newVal) => {
            clearTimeout(timer.value);
            const { height } = newVal;
            const itemHeight = height / rowNum;
            avgHeight.value = itemHeight;
            init();
        });

        // 默认高亮颜色
        const defaultHighlightColor = computed(() => {
            return highlightColors[highlightColors.length - 1];
        });

        // 滚动行数
        const scrollNum = computed(() => {
            return type === 'single' ? 1 : rowNum;
        });

        // 初始化值并开始动画
        const init = () => {
            let newData = [...props.items as ScrollRankingBoardItemWithHeight[]];
            newData = newData.sort((a, b) => b.value - a.value);
            newData = newData.map((item, index) => ({ ...item, height: avgHeight.value, ranking: index + 1, scroll: index }));
            allData.value = newData;
            domData.value = newData.slice(0, rowNum);

            animation();
        }

        // 滚动动画
        const animation = () => {
            // 若记录数小于等于显示行数, 则不滚动
            if (allData.value.length <= rowNum) return;
            timer.value = setInterval(() => {
                let newData = [...allData.value];
                // 将即将要删除的元素高度设置为0
                newData.forEach((item, i) => {
                    if (i < scrollNum.value) {
                        item.height = 0;
                    }
                });
                // 将即将要删除的数据添加到最后
                newData = [...newData, ...newData.slice(0, scrollNum.value).map((item) => ({ ...item, height: avgHeight.value, scroll: item.scroll + rowNum }))];
                // 新数据保存到allData中
                allData.value = newData;
                // domData重新计算
                domData.value = newData.slice(0, rowNum + scrollNum.value);

                // 300ms后分别将allData及domData中需要删除的删除
                setTimeout(() => {
                    newData = [...allData.value];
                    // 删除数组中需要删除的元素
                    newData = newData.slice(scrollNum.value);

                    allData.value = newData;

                    newData = [...domData.value];
                    // 删除数组中需要删除的元素
                    newData = newData.slice(scrollNum.value);

                    domData.value = newData;
                }, 300);

            }, interval);
        }

        onMounted(() => {
            domRef.value?.$el.addEventListener('mouseenter', () => {
                clearInterval(timer.value);
            });

            domRef.value?.$el.addEventListener('mouseleave', () => {
                animation();
            });
        });

        // 行点击事件
        const handleRowClick = (item: ScrollRankingBoardItem, rowIndex: number) => {
            // 不将height属性暴露出去
            Reflect.deleteProperty(item, 'height');
            emit('rowClick', item, rowIndex);
        }

        return () => (
            <GlobalBox className='e-scroll-ranking-board' ref={domRef} style={{ overflow: 'hidden' }}>
                {
                    domData.value.map((item, index) => {
                        const highlightColor = highlightRowNum >= item.ranking ? (highlightColors[item.ranking - 1] || defaultHighlightColor.value) : color;
                        return <BoardItem key={item.label + item.ranking + item.scroll} height={item.height} color={color} onClick={() => handleRowClick(item, index)}>
                            <BoardItemIcon fontSize={rankingFontSize} color={highlightColor}>No.{item.ranking}</BoardItemIcon>
                            <BoardItemLabel fontSize={labelFontSize}>{item.label}</BoardItemLabel>
                            <BoardItemValue fontSize={valueFontSize}>{item.value}</BoardItemValue>
                            {
                                highlightRowNum >= item.ranking && <BoardItemShadow color={highlightColor}></BoardItemShadow>
                            }
                        </BoardItem>
                    }
                    )
                }
            </GlobalBox>
        );
    },
}));