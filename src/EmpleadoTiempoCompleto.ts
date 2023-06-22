
class EmpleadoTiempoCompleto extends Empleado{
    //Atributos.
    private horasTrabajadas : number = 40;
    //Constructor.
    constructor(newNombre :string, newEdad : number, newSalario : number) {
        super(newNombre, newEdad, newSalario)
        this.salario = this.salarioTotal(10);
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

    salarioTotal(tarifa : number) : number{
        let salarioTotal = tarifa * this.horasTrabajadas;
        this.salario = salarioTotal;
        return this.salario;
    }
}