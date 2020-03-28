import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class Navigation extends Component {
  @service blog;
  @service router;
  @service store;

  get tags() {
    return this.store.peekAll('tag');
  }

  get authors() {
    return this.store.peekAll('author');
  }
}
