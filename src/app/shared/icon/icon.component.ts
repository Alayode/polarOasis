import { Component, Input } from '@angular/core';

@Component({
  selector: 'ys-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
/**
 *
 *
 * this file manages the styling of all icons using this component
 *
 * setting the size of  similar icons can be done  in here.
 */

export class IconComponent {

  /**
   * signifies that the component is avaiable for view binding
   *
   * @public type
   * @type string
   */
  @Input() type: string;

  /**
   * signifies that the component is avaiable for view binding
   *
   * @public type
   * @type string
   *
   * TODO: we should change this variable namespace sicne class is a
   * keyword already being used by TypeScript
   */
  @Input() class: string;

  /**
   * signifies that the component is avaiable for view binding
   *
   * @public height
   * @type string
   */
  @Input() height = '1.0em';


  /**
   * signifies that the component is avaiable for view binding
   *
   * @public width
   * @type string
   */
  @Input() width = '1.0em';

  /**
   * signifies that the component is avaiable for view binding
   *
   * @public label
   * @type string
   */

  @Input() label: string;

  /**
   * @function  hasLabel()
   * @returns boolean
   */
  hasLabel() {
    if (this.label) {
      return false;
    } else {
      return true;
    }
  }
}
