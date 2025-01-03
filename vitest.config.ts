import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

/**
 * @description 
 * 將 vite.config 改為使用 vitest/config 引入 defineConfig。
 * 在插件中使用 React swc 會造成錯誤，於是暫時將配置分為兩個檔案，
 * 並透過 vitest 的 mergeConfig 來合併它們，以解決此問題。
 * 儘管如此，vitest 官方仍然建議使用單一配置檔案。
 * 參考文檔：
 * - https://vitest.dev/guide/#configuring-vitest
 * - https://github.com/vitest-dev/vitest/issues/4048
 */
export default mergeConfig(viteConfig, defineConfig({
  test: {
    // globals 為 true 省去測試檔案使用 import
    globals: true,
    /**
     * @description environment
     * * 指定測試環境，適合測試需要 DOM 的 React、Vue 等前端元件
     * * 預設是 node 環境，無法測試 DOM 操作。
     */
    environment: 'jsdom',
    exclude: ["src/main.tsx", "**/node_modules/**"],
    coverage: {
      include: ["src/**/*.tsx"],
      exclude: ["src/main.tsx"],
    },
    onConsoleLog(log, type) {
      console.log("log in test: ", log);
      if (log === "message from third party library" && type === "stdout") {
        return false;
      }
    },
  },

}))