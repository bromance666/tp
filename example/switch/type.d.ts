import { Component } from 'vue';

export interface ITpSwitchProps {
  loading?: boolean; //是否加载中
  disabled?: boolean; //是否禁用
  size?: string; // 尺寸
  vModel?: string; //绑定值
  activeText?: string;  //打开时的文字描述
  inactiveText?: string;
  checkedChildren?: string | Component; // 打开时的开关内容
  unCheckedChildren?: string | Component;
  activeColor?: string; // 打开时的颜色
  inactiveColor?: string;
  change?: (v: boolean) => void;
  focus?: () => void;
  blur?: () => void;
}