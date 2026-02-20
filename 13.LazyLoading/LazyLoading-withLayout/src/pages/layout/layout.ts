import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { Sidebar } from "./sidebar/sidebar";
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Navbar, Sidebar,RouterOutlet],
  templateUrl: './layout.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Layout {

}
