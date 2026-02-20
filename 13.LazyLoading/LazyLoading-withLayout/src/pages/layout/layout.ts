import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

@Component({
  imports: [RouterOutlet,Navbar,Sidebar],
  templateUrl: './layout.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Layout {

}
