"use strict";
class EmpleadoTiempoCompleto extends Empleado {
    //Constructor.
    constructor(newNombre, newEdad, newSalario) {
        super(newNombre, newEdad, newSalario);
        //Atributos.
        this.horasTrabajadas = 40;
        this.salario = this.salarioTotal(10);
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
    salarioTotal(tarifa) {
        let salarioTotal = tarifa * this.horasTrabajadas;
        this.salario = salarioTotal;
        return this.salario;
    }
}
