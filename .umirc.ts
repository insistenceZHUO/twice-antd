import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/twice-antd',
  publicPath: '/twice-antd/',
  exportStatic: {},
  title: 'demo',
  // history: 'hash',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // exportStatic: true,
  mode: 'site',
  // menus: {
  //   ''
  // }
  // more config: https://d.umijs.org/config
});
