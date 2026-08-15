package aula01_06;

import aula01_06.model.Produto;

public class Main {
    public static void main(String[] args){
//        imprimeExercicio(0);
//
//        imprimeExercicio(1);
//        final int FIXED_NUMBER = 10;
//
//        if(FIXED_NUMBER % 2 == 0){
//            System.out.println("Número fixo é par");
//        }else{
//            System.out.println("Número fixo é ímpar");
//        }
//
//        imprimeExercicio(2);
//        String diaSemana = "4";
//
//        switch (diaSemana){
//            case "1":
//                diaSemana = "Domingo";
//                System.out.println(diaSemana);
//                break;
//
//            case "2":
//                diaSemana = "Segunda";
//                System.out.println(diaSemana);
//                break;
//
//            case "3":
//                diaSemana = "Terça-feira";
//                System.out.println(diaSemana);
//                break;
//
//            case "4":
//                diaSemana = "Quarta-feira";
//                System.out.println(diaSemana);
//                break;
//
//            case "5":
//                diaSemana = "Quinta-feira";
//                System.out.println(diaSemana);
//                break;
//
//            case "6":
//                diaSemana = "Sexta-feira";
//                System.out.println(diaSemana);
//                break;
//
//            case "7":
//                diaSemana = "Sabado";
//                System.out.println(diaSemana);
//                break;
//
//            default:
//                System.out.println("Valor inválido");
//        }
//
//        imprimeExercicio(3);
//        for(int i = 0; i < 100; i++){
//            if(i % 3 == 0 || i % 5 == 0){
//                System.out.println("Número múltiplo: " + i);
//            }
//        }
//
//        imprimeExercicio(4);
//        int number = 10;
//        int fatorial = number;
//
//        while(number >= 1){
//            if(fatorial != number) {
//                fatorial *= number;
//            }
//            number--;
//        }
//
//        System.out.println("Fatorial de 10 é igual a: " + fatorial);
//
//        imprimeExercicio(5);
//        int[] arrayNumbers = new int[]{4, 7, 13, 87, 46, 32, 39, 1, 54 ,0};
//
//        for(int i = 1 ; i <= arrayNumbers.length; i++){
//            if(i % 2 == 0){
//                System.out.println(arrayNumbers[i - 1]);
//            }
//        }
//
//        imprimeExercicio(6);
//        double total = 0;
//
//        for(int item : arrayNumbers){
//            total += item;
//        }
//
//        System.out.println("Total do array: " + total);
//        System.out.printf("Media do array: %.2f", total / arrayNumbers.length);
//
//        imprimeExercicio(7);
//        int maior = arrayNumbers[0];
//        int posMaior = 0;
//        int menor = arrayNumbers[0];
//        int posMenor = 0;
//
//        for(int i = 1; i < arrayNumbers.length; i++){
//            if(arrayNumbers[i] > maior){
//                maior = arrayNumbers[i];
//                posMaior = i + 1;
//            } else if (arrayNumbers[i] < menor) {
//                menor = arrayNumbers[i];
//                posMenor = i + 1;
//            }
//        }
//
//        System.out.println("Maior número (" + maior + ") está na posição: " + posMaior);
//        System.out.println("Menor número (" + menor + ") está na posição: " + posMenor);
//
//        imprimeExercicio(8);
//
//        int[][] matriz3x3 = new  int[][]{
//                {4, 14, 65},
//                {24, 84, 9},
//                {1, 50, 34}
//        };
//
//        for(int[] item : matriz3x3){
//            for(int num : item){
//                System.out.printf("%6d", num);
//            }
//            System.out.println();
//        }
//
//        imprimeExercicio(9);
//        int linha = 0;
//        int coluna = 0;
//        int[][] matriz4x4 = new  int[][]{
//                {4, 14, 65, 34},
//                {24, 84, 9, 21},
//                {1, 50, 34, 12},
//                {10, 17, 81, 32}
//        };
//
//        for(int[] item : matriz3x3){
//            for(int num : item){
//                if(coluna == 0){
//                    System.out.println("Coluna (" + matriz4x4[num] + "): " + coluna);
//                }
//                coluna = 0;
//                linha += num;
//            }
//            System.out.println();
//        }

//        aula01_06.Pessoa p1 = new aula01_06.Pessoa("Eduardo", 21);
//
//        aula01_06.Pessoa p2 = new aula01_06.Pessoa("Gabriel", 22);
//
//        p1.apresentar("Brasileiro");
//        p2.apresentar("Americano");
//
//        System.out.println(aula01_06.Pessoa.getSexo());
//
//        aula01_06.Calculadora calc = new aula01_06.Calculadora();
//
//        calc.soma(10, 2);
//        calc.subtrai(80, 8);
//        calc.multiplica(4, 10);
//        calc.divide(9, 0);
//        calc.divide(18, 4);

        double[] notas = {123, 456, 789};

        Produto ventilador = new Produto("Ventilador", "vent", 80.0, 10, notas);

        notas[0] = -100;

        System.out.println(ventilador.getNfe()[0]);

        Notificador[] canais = {
                new NotificadorEmail(),
                new NotificadorSMS()
        };

        for(Notificador canal : canais){
            canal.enviar("Eduardo", "Olá Eduardo!!");
        }
    }

    private static void imprimeExercicio(int number){
        if(number == 0) {
            System.out.println("\n---------- Lista de Exercícios ----------");
        }else {
            System.out.println("\n---------- Exercício: " + number + " ----------");
        }
    }
}