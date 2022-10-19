import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'MyButton',
  // template:'<button>My Button</button>';
  render() {
    return h('button', null, 'MyButton');
  },
});
