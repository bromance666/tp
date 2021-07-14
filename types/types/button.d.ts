import { CommonEventFunction } from './common';
export interface TpButtonProps {
  /**
   * 按钮大小
   * @default 'normal'
   */
  size?: 'normal' | 'small' | 'large';
  /**
   * 按钮类型
   * @default 'plain'
   */
  type?: 'plain' | 'primary';
  /**
   * 按钮载入状态
   * @default false
   */
  loading?: boolean;
  /**
   * 是否通栏样式（按钮宽度为父容器宽度）
   * @default false
   */
  full?: boolean;
  /**
   * 按钮禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击方法
   */
  onClick?: CommonEventFunction;
}
