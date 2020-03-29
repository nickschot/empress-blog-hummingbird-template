import Component from '@glimmer/component';
import { linearMapRange } from '../helpers/linear-map-range';
import { htmlSafe } from '@ember/string';
import { inject as service } from '@ember/service';

export default class TopBarComponent extends Component {
  @service media;

  get styles() {
    let style = '';

    if (this.media.isMobile) {
      style = `transform: translateY(-${linearMapRange(this.args.relativePosition, 0, 1, 0, 100)}%);`;
    } else {
      style = `margin-left: ${this.args.position}px; width: calc(100% - ${this.args.position}px);`;
    }

    return htmlSafe(style);
  }
}
