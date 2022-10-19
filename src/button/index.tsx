import { defineComponent, PropType } from 'vue';
import 'uno.css';

export type IColor = 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue', // 设定默认颜色
  },
};

export default defineComponent({
  name: 'SButton',
  props, // 注册属性
  setup(props, { slots }) {
    console.log('props', props);
    return () => <button
      class={`
          py-2 
          px-4 
          font-semibold 
          rounded-lg 
          shadow-md 
          text-white 
          bg-${props.color}-500 
          hover:bg-${props.color}-700 
          border-none 
          cursor-pointer 
          m-1
      `}
    >
      {slots.default ? slots.default() : ''}
    </button>;
  },
});
