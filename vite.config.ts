import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from './config/unocss';

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
    exports: 'named',
    assetFileNames: `assets/[name].css`,
  },
};

export default defineConfig({
  plugins: [vue({}), vueJsx({}), Unocss()],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild' 是混淆的意思，这里面有两个混淆工具可以选择，即 terser 和 esbuild
    sourcemap: true, // 输出单独 source文件
    brotliSize: true, // 生成压缩大小报告
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI', // 生成包的名字，在 iife/umd 包，同一页上的其他脚本可以访问它
      fileName: 'smarty-ui', // 文件名，其实只是一个输出文件名的前缀
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
    cssCodeSplit: true,
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
