import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-observers
import { observer } from '@ember/object';

export default Helper.extend({
  router: service(),
  // eslint-disable-next-line ember/no-observers
  onNewRoute: observer('router.currentRouteName', function() {
    this.recompute();
  }),
  compute([route]) {
    return route === this.router.currentRouteName;
  },
});
