import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles:[ `
  .online{
    color:white;
  }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName='Test Servers';
  serverCreated ='False';
  serverStatus :string='offline';
  serverId: number = 10;
  servers = ['testserver','testserver2'];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer=true
    },2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' :'offline';
   }

  ngOnInit(){
  }
  onCreateServer(){
    this.serverCreated ="true";
    this.serverCreationStatus=
    'Server was created. name is '+this.serverName ;
    this.servers.push (this.serverName);
  }
  onUpdateServerName(event:any){
    this.serverName= (<HTMLInputElement >event.target).value;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green':'red';
  }
}
