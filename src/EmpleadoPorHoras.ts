
class EmpleadoPorHoras extends Empleado{
    //Atributos.
    private tarifaHora : number;

    //Constructor.
    constructor(newNombre :string, newEdad : number, newSalario : number, newTarifaHora : number) {
        super(newNombre, newEdad, newSalario)
        this.tarifaHora = newTarifaHora;
        this.salario = this.salarioTotal(41);
    }
    //Métodos.
    getNombre() : string{
        return this.nombre;
    }

    setNombre(valor : string) : void{
        this.nombre = valor;
    }

    getEdad() : number{
        return this.edad;
    }

    setEdad(valor : number) : void {
        this.edad = valor;
    }

    getSalario() : number{
        return this.salario;
    }

    salarioTotal(horas : number) : number{
        let salarioTotal : number = this.tarifaHora * horas;
        if(horas > 40){
            salarioTotal *= 1.1;
        }
        this.salario = salarioTotal;
        return this.salario;
    }
}