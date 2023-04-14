/*
 * @Autor: costa
 * @Date: 2023-04-07 16:39:44
 * @LastEditors: costa
 * @LastEditTime: 2023-04-14 14:18:52
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { withInstall } from '../../utils/common';
// @ts-ignore
import FullScreenContainer from './src/fullScreenContainer.tsx';

export const EFullScreenContainer = withInstall(FullScreenContainer)
export default EFullScreenContainer;

export * from './src/fullScreenContainer';