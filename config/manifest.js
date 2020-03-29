'use strict';

// TODO: emit this file into app on installation of the template

module.exports = function(environment, appConfig) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  const defaultLogo = size => `/empress-blog-hummingbird-template/app-icons/hummingbird-app-icon-${size}.png`;
  const logo = appConfig.blog.appIcon || appConfig.blog.logo;
  const ext = logo ? logo.split('.')[1] : 'png';

  let icons = [];
  if (!appConfig.blog.appIcon) {
    icons = [
      {
        src: defaultLogo(32),
        sizes: `32x32`,
        targets: ['favicon']
      },
      ...[192, 280, 512].map(size => ({
        src: defaultLogo(size),
        sizes: `${size}x${size}`,
        type: `image/${ext}`,
        targets: ['apple']
      })),
      ...[192, 280, 512].map(size => ({
        src: defaultLogo(size),
        sizes: `${size}x${size}`,
        type: `image/${ext}`
      }))
    ];
  }

  return {
    name: appConfig.blog.title || 'empress-blog-hummingbird-template',
    short_name: appConfig.blog.title || 'empress-blog-hummingbird-template',
    description: appConfig.blog.description || '',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fafbfc',
    theme_color: '#fff',
    icons: icons
  };
};
