const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      vuetify: {

      },
      builderOptions: {
        win: {
          icon: 'public/ruri.png',
          "artifactName": "Stopwatch Setup ${version}.${ext}",
        },
      },
    },
  },
});
