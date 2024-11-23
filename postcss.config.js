module.exports = {
  plugins: ["tailwindcss", "autoprefixer"],
};

// NOTE: 当我使用turbo模式时，css的变量无法实时生效 都被Safari缓存
// 当我使用默认的 dev 模式时, PostCSS 无法使用mjs的配置 export default Module 方式导出，必须改成ts 或者用 mjs的 module.exports 导出
// 如果使用turbo模式，为避免css被Safari缓存，配置打开next.config.ts 的 experimental.turbo.useSwcCss 使用swc编译css
