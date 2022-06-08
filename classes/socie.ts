export class Domicilio{
    public direccion:string;
    public localidad:string;

    public constructor(direccion:string,localidad:string){
        this.direccion=direccion;
        this.localidad=localidad;
    };
};

export class Tutor{
    public nombre_tutor:string;
    public apellido_tutor:string;
    public telefono_tutor:number;
    public vinculo_tutor:string;

    public constructor(nombre_tutor:string,apellido_tutor:string,telefono_tutor:number,vinculo_tutor:string){
        this.nombre_tutor=nombre_tutor;
        this.apellido_tutor=apellido_tutor;
        this.telefono_tutor=telefono_tutor;
        this.vinculo_tutor=vinculo_tutor;
    };
};

export class Socie{
    public nombre:string;
    public apellido:string;
    public dni:number;
    public pronombre:string;
    public nacimiento:number;
    public telefono_1:number;
    public telefono_2:number;
    public mail:string;
    public escuela:string;
    public carrera:string;
    public tutor?: Tutor;

    public constructor(nombre:string,apellido:string,dni:number,pronombre:string,nacimiento:number,telefono_1:number,telefono_2:number,mail:string,escuela:string,carrera:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.pronombre=pronombre;
        this.nacimiento=nacimiento;
        this.telefono_1=telefono_1;
        this.telefono_2=telefono_2;
        this.mail=mail;
        this.escuela=escuela;
        this.carrera=carrera;
    };
};