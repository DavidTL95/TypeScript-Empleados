"use strict";
class EmpleadoPorHoras extends Empleado {
    //Constructor.
    constructor(newNombre, newEdad, newSalario, newTarifaHora) {
        super(newNombre, newEdad, newSalario);
        this.tarifaHora = newTarifaHora;
        this.salario = this.salarioTotal(41);
    }
    //Métodos.
    getNombre() {
        return this.nombre;
    }
    setNombre(valor) {
        this.nombre = valor;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(valor) {
        this.edad = valor;
    }
    getSalario() {
        return this.salario;
    }
    salarioTotal(horas) {
        let salarioTotal = this.tarifaHora * horas;
        if (horas > 40) {
            salarioTotal *= 1.1;
        }
        this.salario = salarioTotal;
        return this.salario;
    }
}
