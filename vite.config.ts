import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({ 
      include: ['src'],
      outputDir: 'es',
      insertTypesEntry: true, 
      // copyDtsFiles: false
    })
  ],
  build: {
    target: 'modules',
    outDir: "lib", //输出文件名称
    //css分离
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"), //指定组件编译入口文件
      formats: ['es', 'cjs', 'umd'],
      name: "EDataV",
      // fileName: "e-datav",
    }, //库编译模式配置
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'lib',
          preserveModulesRoot: 'src'
        },
        {
          format: 'es',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          //配置打包根目录
          dir: 'es',
          preserveModulesRoot: 'src'
        },
        {
          dir: 'umd',
          format: 'umd',
          name: 'EDataV',
          entryFileNames: 'e-datav-vue3.umd.js',
          sourcemap: true,
          globals: {
            vue: 'Vue',
          },
        }
      ]
    }
  }
})
