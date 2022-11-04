import { Component, OnInit, ViewChild } from '@angular/core';
import {MapInfoWindow, MapMarker, MapGeocoder} from '@angular/google-maps'
import { Cliente } from 'src/app/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-geolocalization',
  templateUrl: './geolocalization.component.html',
  styleUrls: ['./geolocalization.component.css']
})
export class GeolocalizationComponent implements OnInit {
  title = ''
  cep = ''
  cidade = ''
  estado = ''
  
  constructor(geocoder: MapGeocoder, private clienteService : ClienteService) {
    geocoder.geocode({
        address: '1600 Amphitheatre Parkway, Mountain View, CA'
    }).subscribe(({
        results
    }) => {
        console.log(results);
    });
    }
    
  locations = []
  clientes : Cliente[] = []
  cliente = {} as Cliente
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(items =>{
        const dados =  items as Cliente[]
        console.log(dados)
        this.clientes = dados

        this.clientes.map(c =>{
            if(c.latitude && c.longitude)
            this.markerPositions.push({lat:  c.latitude, lng: c.longitude})
            
        })
      })
      
     
  }
  display: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
      lat: -16.84400090201435,
      lng: -49.22940458631533
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  markerOptions: google.maps.MarkerOptions = {
      draggable: false
  };
  markerPositions: google.maps.LatLngLiteral[] = [];

  openInfoWindow(marker: MapMarker, markPosition :google.maps.LatLngLiteral) {
        console.log(markPosition.lat)
        
        this.clienteService.getByLatLng(markPosition.lat, markPosition.lng).subscribe(data =>{
            this.title = data.nome
            this.cep = data.cep
            this.cidade = data.cidade
            this.estado = data.uf
        })
        
        
        
      if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
  

  
  
}
