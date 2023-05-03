module.exports = {
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            "./src/styles/reset.scss",
            "./src/styles/global.scss",
            "./src/styles/mixins.scss",
          ],
        })
        .end();
    });
  },
};
