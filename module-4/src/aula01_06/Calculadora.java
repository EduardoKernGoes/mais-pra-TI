package aula01_06;

public class Calculadora {
    public void soma(double valor1, double valor2){
        System.out.printf("A soma de %.2f mais %.2f é: %.2f\n", valor1, valor2, (valor1 + valor2));
    }

    public void subtrai(double valor1, double valor2){
        System.out.printf("A subtração de %.2f menos %.2f é: %.2f\n", valor1, valor2, (valor1 - valor2));
    }

    public void multiplica(double valor1, double valor2){
        System.out.printf("A multiplicação de %.2f por %.2f é: %.2f\n", valor1, valor2, (valor1 * valor2));
    }

    public void divide(double valor1, double valor2){
        if(valor2 == 0){
            System.out.println("Erro, não é possível dividir um número por 0\n");
            return;
        }
        System.out.printf("A divisão de %.2f por %.2f é: %.2f\n", valor1, valor2, (valor1 / valor2));
    }

}