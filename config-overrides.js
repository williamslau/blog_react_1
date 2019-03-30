const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
// let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
// let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    webpack:function (config, env) {
        
        config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
        config = rewireLess.withLoaderOptions({
            modifyVars: {"@primary-color": "#dbd3af"},  // 配置的主题颜色
            javascriptEnabled: true
        })(config, env);
        return config;
    }
};