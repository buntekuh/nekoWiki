import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Domain } from '../domain';

@Component({
  selector: 'app-edit-domain',
  templateUrl: './edit-domain.component.html',
  styleUrls: ['./edit-domain.component.scss'],
})
export class EditDomainComponent implements OnInit {
  domain : Domain;
  name   : string;
  id     : number;
  hidden : string = 'hidden';

  constructor() { }

  ngOnInit() {
  }

  public edit(domain) {
    this.domain = domain;
    this.name = domain.$value;
    this.id = domain.$key;
    this.hidden = '';
  }

  submit(form: NgForm) {

  }

}
