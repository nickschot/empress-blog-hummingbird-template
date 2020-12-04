import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class RouteIsHelper extends Helper {
  @service router;

  compute([route]) {
    return route === this.router.currentRouteName;
  }
}
