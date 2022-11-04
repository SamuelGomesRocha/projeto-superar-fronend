import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../Endereco';

@Injectable({
  providedIn: 'root'
})
export class CepSericeService {

  constructor(private httpClient: HttpClient) { }

  buscar(cep:string): Observable<Endereco>{
    return this.httpClient.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`)
  }
}
