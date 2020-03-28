'use strict';

// TODO: import from host app
const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions'
];

const options = {
  cssModules: {
    headerModules: [
      //'experiments/styles/app'
    ],
    plugins: {
      before: [
        require('postcss-nested')
      ],
      after: [
        require('postcss-normalize', { browsers }),
        require('postcss-preset-env')({
          browsers,
          stage: 3,
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  }
};

if (process.env.ANALYZE_BUNDLE) {
  options.autoImport = {
    webpack: {
      plugins: [
        new (require('webpack-bundle-analyzer')).BundleAnalyzerPlugin(),
      ],
    }
  };
}

module.exports = {
  name: require('./package').name,
  options,
  config(env, config) {
    if(!config['responsive-image']) {
      return {
        'responsive-image': {
          sourceDir: 'images',
          destinationDir: 'responsive-images',
          quality: 80,
          supportedWidths: [2000, 1000, 600, 300, 100],
          removeSourceDir: false,
          justCopy: false,
          extensions: ['jpg', 'jpeg', 'png', 'gif']
        }
      }
    }
  }
};
