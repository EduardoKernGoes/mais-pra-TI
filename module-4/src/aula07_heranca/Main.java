package aula07_heranca;

public class Main {
    public static void main(String[] args) {
        Funcionario[] equipe = {
            new Vendedor("Eduardo", 10542, "87586925364", 100),
            new Vendedor("Fernando", 1920, "74857986598", 59),
            new Vendedor("Bernardo", 2470, "36528956875", 245)
        };

        double folha = 0;

        for(Funcionario f : equipe){
            System.out.println("Funcionário: " + f + "\nSalário: R$" + f.calcularSalario() + "\n");
            folha += f.calcularSalario();
        }

        System.out.println("Folha de pagamento: R$" + folha);
    }
}
