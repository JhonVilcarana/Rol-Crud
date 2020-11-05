import { Component, OnInit } from '@angular/core';
import { Rol } from './rol';
const roles:Rol[]=[{idrol:1 ,nomrol:'dreyna',estado:1}];

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  dpc: string []= ['idrol','nomrol','estado'];
  dataSource = roles;
  constructor() { }

  ngOnInit(): void {
  }

}
