package aula07_heranca;

public abstract class Funcionario {
    protected String nome;
    protected double salario;
    protected String cpf;

    public Funcionario(String nome, double salario, String cpf){
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;
    }

    public abstract double calcularSalario();

    @Override
    public String toString(){
        return nome;
    }
}