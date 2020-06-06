import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';
import { PriceList } from 'src/app/models/priceList';
import { PriceListService } from 'src/app/services/priceList.service';

export interface ClientForm {
  nombre: string;
  apellidos: string;
  direccion: string;
  fechaNacimiento: Date;
  telefono: number;
  dni: string;
  email: string;
  estado: boolean;
  fechaAlta: Date;
  fechaBaja: Date;
  diasEntrenados: number;
  tarifa: number;
  password: string;
}



@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  @ViewChild('inputPassword', {static: false}) inputPassword: ElementRef;

  editMode = false;
  idClient: number;
  clientToEdit: Client;
  tarifas: Array<PriceList> = [];
  defaultPriceList = 'hola';

  reactiveForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private clientService: ClienteService,
      private priceListService: PriceListService) {

    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.editMode = true;
        this.idClient = params['id'];
      }
    });

    this.getAllTarifas();
  }

  getAllTarifas() {
    this.priceListService.lista().subscribe(params => {
      this.tarifas = params;
      // this.defaultPriceList = this.tarifas[0].id;
    });
  }

  ngOnInit() {
    this.buildForm();
    this.loadData();
  }

  getFormControlNoValid(formControlName: string) {
    return this.reactiveForm.get(formControlName).invalid && this.reactiveForm.get(formControlName).touched;
  }

  get repeatPassword() {
    const password = this.reactiveForm.get('password');
    const passwordRepeated = this.reactiveForm.get('password2');

    return (password.value === passwordRepeated.value) ? false : true;
  }


  buildForm() {
    this.reactiveForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', Validators.required],
      tarifa: ['']
    }
    );
  }

  loadData() {
    // Con esto evitamos completar todos los campos con setValue
    if (this.editMode) {
      this.clientService.detalle(this.idClient).subscribe(cliente => {
        // instancio el cliente que me devuelve la llamada al servicio
        this.clientToEdit = cliente;
        // Le doi valores al formulario con el cliente que me he traido del servicio
        this.reactiveForm.reset({
          nombre: this.clientToEdit.nombre,
          apellidos: this.clientToEdit.apellidos,
          dni: this.clientToEdit.dni,
          email: this.clientToEdit.email,
          direccion: this.clientToEdit.direccion,
          fechaNacimiento: this.formatDate(this.clientToEdit.fechaNacimiento.toString()),
          telefono: this.clientToEdit.telefono,
          tarifa: this.clientToEdit.tarifa.tipo,
          password: this.clientToEdit.password
        });
      });
    }

  }

  onSubmit() {
    if (this.reactiveForm.invalid) {
      return Object.values(this.reactiveForm.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(ctrl => ctrl.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    } else {
      // fecha actual para el nuevo cliente
      if (!this.editMode){
      const date = new Date();
      const fechaCliente = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
      }
      // Post de información valida
      const newClient: ClientForm = {
        nombre: this.reactiveForm.get('nombre').value,
        apellidos: this.reactiveForm.get('apellidos').value,
        direccion: this.reactiveForm.get('direccion').value,
        fechaNacimiento: this.reactiveForm.get('fechaNacimiento').value,
        telefono: this.reactiveForm.get('telefono').value,
        dni: this.reactiveForm.get('dni').value,
        email: this.reactiveForm.get('email').value,
        estado: true,
        fechaAlta: new Date(),
        fechaBaja: new Date(),
        diasEntrenados: 0,
        tarifa: 1,
        password: this.reactiveForm.get('password').value
      };
      console.log('CLIENTE A GUARDAR: ', newClient);
      this.clientService.crear(newClient).subscribe(res => console.log(res));
      console.log('CLIENTE CREADO');
    }
  }

  formatDate(date: string): string {
    // 1997-10-10T22:00:00.000+0000
    const years = date.substr(0, 4);
    const months = date.substr(5, 2);
    const days = date.substr(8, 2);
    return [years, months, days].join('-');

  }

  showHidePassword() {
    console.log('inut password: ', this.inputPassword);
    // this.inputPassword.nativeElemen
  }


}
