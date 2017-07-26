import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private modalSrv: BsModalService) {}

  showModal() {
    this.modalSrv.show(TestComponent);
  }
}
