import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class PostCard extends Component {
  get styles() {
    let styles = '';

    if (this.args.post.image) {
      styles = `background-image: url(${this.args.post.image})`;
    }

    return htmlSafe(styles);
  }
}
