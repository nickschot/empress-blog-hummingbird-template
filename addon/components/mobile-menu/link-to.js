import LinkComponent from 'ember-mobile-menu/components/mobile-menu/link-to';

export default LinkComponent.extend({
  click() {
    // similar behaviour to the empress-blog link-to, except when we are already on the page
    if(!this.active && window.scrollTo) {
      window.scrollTo(0,0);
    }

    this._super(...arguments);
  }
});
