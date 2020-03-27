'use strict';

// TODO: import from host app
const browsers = [
  'last 1 Chrome versions',
  'last 1 Firefox versions',
  'last 1 Safari versions'
];

module.exports = {
  name: require('./package').name,
  options: {
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
  }
};
