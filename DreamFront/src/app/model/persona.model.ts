export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  puesto: string;
  lugar: string;
  educacion: string;
  descripcion: string;
  constructor(
    nombre: string,
    apellido: string,
    img: string,
    puesto: string,
    lugar: string,
    educacion: string,
    descripcion: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.puesto = puesto;
    this.lugar = lugar;
    this.educacion = educacion;
    this.descripcion = descripcion;
  }
}
