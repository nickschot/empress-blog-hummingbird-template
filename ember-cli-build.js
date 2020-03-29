'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    fingerprint: {
      extensions: ['js', 'css', 'map']
    },

    'ember-cli-image-transformer': {
      images: [
        {
          inputFilename: 'public/images/hummingbird-app-icon.png',
          outputFileName: 'hummingbird-app-icon@',
          convertTo: 'png',
          sizes: [32, 192, 280, 512],
        }
      ]
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
