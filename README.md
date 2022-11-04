# FrontendMaxcliente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Serviço de mapas

Para utilizar o serviço de mapas, você deverá inserir sua key na tag <script> do arquivo "src/index.html", conforme fora explicitado abaixo:

![image](https://user-images.githubusercontent.com/63269683/199889409-a1511e4a-32d1-46c4-8f23-a3f21e5fd457.png)

## Telas

### Lista de Clientes
* Apresenta os clientes cadastrados
* Permite a deleção dos mesmos
* Permite a busca pelo nome dos mesmos

![image](https://user-images.githubusercontent.com/63269683/199891365-2047dc5d-a236-41d0-9627-2d9170d4f190.png)

### Cadastro de Cliente
* Acessado a partir de "Novo Cliente"
* Permite o cadastro de Cliente
* Ao digitar um CEP válido e clicar fora do campo, os dados de endereço serão atualizados automaticamente
* Permite o cadastro de um ponto de localização no mapa, para ser exibido posteriormente (na tela Geolocalização dos Clientes)

![image](https://user-images.githubusercontent.com/63269683/199891562-4a314353-6375-4c73-a086-e1b9553d59f6.png)


### Geolocalização dos Clientes
* Exibe as geolocalizações dos clientes em formato de marcações
* Exibe detalhes do cliente ao clicar em uma marcação (sem ferir a LGPD)

![image](https://user-images.githubusercontent.com/63269683/199891976-7df6bc08-614a-400c-83f3-3df3fd6b37cc.png)



