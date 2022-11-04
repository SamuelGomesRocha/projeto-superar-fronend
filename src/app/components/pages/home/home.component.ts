import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/Cliente';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allClientes : Cliente[] = []
  clientes : Cliente[] = []
  cliente?: Cliente
  faTrash = faTrash
  faPenToSquare = faPenToSquare
  faSearch = faSearch

  constructor(private clienteService : ClienteService, private messagesService : MessagesService, private router : Router) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(items =>{
      const dados =  items as Cliente[]
      console.log(dados)
      this.allClientes = dados
      this.clientes = dados
    })
  }

  search(e:Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value

    this.clientes = this.allClientes.filter((cliente) =>{
      return cliente.nome.toLowerCase().includes(value.toLowerCase());
    })
  }


  removeHandler(id:any){
    console.log(id)
     this.clienteService.deleteById(id).subscribe();
     this.messagesService.add("Cliente removido com sucesso!");
     setTimeout(() =>{

     }, 4000)
     window.location.reload()
  }

}
