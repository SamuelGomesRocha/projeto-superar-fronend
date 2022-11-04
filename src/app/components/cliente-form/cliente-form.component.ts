import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { CepSericeService } from 'src/app/services/cep-serice.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Cliente } from 'src/app/Cliente';
import { Endereco } from 'src/app/Endereco';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Cliente>
  @Input() btnText!: string;

  clienteForm!: FormGroup;
  cepService! : CepSericeService;

  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild(GoogleMap)
  public map!: GoogleMap;

  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDefaultUI: true,
    fullscreenControl: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
  };
  latitude!: any;
  longitude!: any;
  constructor(private cepSerice : CepSericeService, private ngZone: NgZone) { }

  
  display: any;
  /* 
  center: google.maps.LatLngLiteral = {
      lat: -16.84400090201435,
      lng: -49.22940458631533
    };
    */
    zoom = 10;
    markerOptions: google.maps.MarkerOptions = {
      draggable: false
    };
    markerPositions: google.maps.LatLngLiteral[] = [];
    addMarker(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
        
    }

    ngAfterViewInit(): void {
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        console.log({ place }, place.geometry.location?.lat());

        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();
        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });
  }


  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      uf: new FormControl('', [Validators.required]),
    })

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    }

  get nome(){
    return this.clienteForm.get('nome')!;
  }

  get cep(){
    return this.clienteForm.get('cep')!;
  }

  get cnpj(){
    return this.clienteForm.get('cnpj')!;
  }
  get logradouro(){
    return this.clienteForm.get('logradouro')!;
  }
  get cidade(){
    return this.clienteForm.get('cidade')!;
  }
  get bairro(){
    return this.clienteForm.get('bairro')!;
  }
  get uf(){
    return this.clienteForm.get('uf')!;
  }



  async consultaCep(valor:string){
    this.cepSerice.buscar(valor).subscribe(data =>{
       this.populaForm(data)
        console.log(data)
     })
  }

  populaForm(data:any){

    this.clienteForm.get('cep')?.setValue(data.cep) 
    this.clienteForm.get('logradouro')?.setValue(data.logradouro)
    this.clienteForm.get('bairro')?.setValue(data.bairro)
    this.clienteForm.get('cidade')?.setValue(data.localidade)
    this.clienteForm.get('uf')?.setValue(data.uf)

  }

  submit(){
    if(this.clienteForm.invalid){ 
      return;}
    console.log(this.clienteForm.value);
    this.clienteForm.value.latitude = this.markerPositions[0].lat;
    this.clienteForm.value.longitude = this.markerPositions[0].lng;
    this.onSubmit.emit(this.clienteForm.value)
  }

}
