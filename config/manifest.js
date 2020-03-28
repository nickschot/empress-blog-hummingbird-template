'use strict';

// TODO: emit this file into app on installation of the template

module.exports = function(environment, appConfig) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  const logo = appConfig.blog.appIcon || appConfig.blog.logo || '/empress-blog-hummingbird-template/images/hummingbird-app-icon.png';
  const ext = logo.split('.')[1];

  return {
    name: appConfig.blog.title || 'empress-blog-hummingbird-template',
    short_name: appConfig.blog.title || 'empress-blog-hummingbird-template',
    description: appConfig.blog.description || '',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafbfc',
    theme_color: '#fff',
    icons: [
      {
        src: logo,
        sizes: '1000x1000',
        type: `image/${ext}`,
        targets: ['apple']
      }
    ]
  };
};
