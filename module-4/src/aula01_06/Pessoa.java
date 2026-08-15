package aula01_06;

public class Pessoa {
    public String nome;
    protected int idade;
    private float peso = 87;
    private static String sexo = "Masculino";
    private final double PI;

    public Pessoa(String nome, int idade){
        this.nome = nome;
        this.idade = idade;
        this.PI = 3.1415;
    }

    void apresentar(String nacionalidade) {
        System.out.println("Olá, meu nome é: " + nome + " e sou " + nacionalidade);
    }

    public float getPeso(){
        return this.peso;
    }

    public void setPeso(float peso){
        this.peso = peso;
    }

    public static String getSexo(){
        return sexo;
    }
}