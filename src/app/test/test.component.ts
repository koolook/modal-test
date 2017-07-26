import { Component, OnInit, Optional } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  showInModal = false;
  prefix = 'Inline'

  radioModel;

  constructor(@Optional() private ref: BsModalRef) {
    if (this.ref) {
      this.showInModal = true;
      this.prefix = 'Modal';
    }

    this.radioModel = this.prefix + 'Left';
  }

  ngOnInit() {
  }

  close() {
    if (this.showInModal) {
      this.ref.hide();
    }
  }
}
