import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Cliente';
import { environment } from 'src/environments/environment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private cadClienteUrl = `https://microservice-cliente.herokuapp.com/cliente/cadastra`;
  private listaClientes = `https://microservice-cliente.herokuapp.com/cliente/listar`;
  constructor(private http : HttpClient) { }


  getClientes(): Observable<Cliente[]>{
    console.log()
    return this.http.get<Cliente[]>(this.listaClientes);
  }

  createCliente(cliente : Cliente):Observable<FormData>{
    return this.http.post<FormData>(this.cadClienteUrl, cliente); 
  }

  getByLatLng(latitude : number, longitude : number) : Observable<Cliente>{
    return this.http.get<Cliente>(`https://microservice-cliente.herokuapp.com/cliente/${longitude}/${latitude}`);
  }

  deleteById(id:number){
    return this.http.delete(`https://microservice-cliente.herokuapp.com/cliente/del/${id}`);
  }
}
