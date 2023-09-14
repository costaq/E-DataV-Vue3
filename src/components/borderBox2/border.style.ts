/*
 * @Autor: costa
 * @Date: 2023-07-20 11:08:14
 * @LastEditors: costa
 * @LastEditTime: 2023-08-10 11:51:46
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled from "vue3-styled-components";

const borderContainerProps = {
    borderColor: { type: String, default: "#4cc7f3" },
    borderWidth: { type: Number, default: 2 },
    lineWidth: { type: Number, default: 10 },
    backgroundColor: { type: String, default: 'rgba(76, 199, 243, 0.15)' }
};

/**
 * @description 边框内容
 * @summary 通过线性渐变实现，从上开始渐变n个px，然后变成透明n个px，再持续透明，直到最后带颜色的n个px，然后旋转90度，相同方法从左开始画，再定位到右下角，开始画另外2个遍
 */
export const BorderContainer = styled('div', borderContainerProps)`
    position: relative;
    width: 100%;
    height: 100%;
    background-origin: content-box;
    background-color: ${props => props.backgroundColor};
    background-image:
        linear-gradient(${props => props.borderColor} ${props => props.borderWidth}px, transparent ${props => props.borderWidth}px, transparent calc(100% - ${props => props.borderWidth}px), ${props => props.borderColor} ${props => props.borderWidth}px),
        linear-gradient(90deg, ${props => props.borderColor} ${props => props.borderWidth}px, transparent ${props => props.borderWidth}px, transparent calc(100% - ${props => props.borderWidth}px), ${props => props.borderColor} ${props => props.borderWidth}px),
        linear-gradient(${props => props.borderColor} ${props => props.borderWidth}px, transparent ${props => props.borderWidth}px, transparent calc(100% - ${props => props.borderWidth}px), ${props => props.borderColor} ${props => props.borderWidth}px),
        linear-gradient(90deg, ${props => props.borderColor} ${props => props.borderWidth}px, transparent ${props => props.borderWidth}px, transparent calc(100% - ${props => props.borderWidth}px), ${props => props.borderColor} ${props => props.borderWidth}px);
    background-repeat: no-repeat;
    background-position: top left, top left, bottom right, bottom right;
    background-size: ${props => props.lineWidth}px 100%, 100% ${props => props.lineWidth}px;
`;