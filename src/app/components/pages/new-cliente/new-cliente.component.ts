import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {
  btnText = 'Cadastrar';
  constructor(private clienteService : ClienteService, private messagesService : MessagesService, private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(cliente : Cliente) {
    
    const fd = new FormData()
    fd.append("nome", cliente.nome)
    fd.append("cnpj", cliente.cnpj)
    fd.append("cep", cliente.cep)
    fd.append("logradouro", cliente.logradouro)
    fd.append("bairro", cliente.bairro)
    console.log(cliente.bairro)
    fd.append("cidade", cliente.cidade)
    fd.append("uf", cliente.uf)
    console.log("Deu bom!");
    console.log(fd)
   
    await this.clienteService.createCliente(cliente).subscribe();
    this.messagesService.add("Cliente adicionado com sucesso");
    this.router.navigate(['/'])

  }

}
