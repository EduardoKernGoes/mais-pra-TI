package aula01_06.model;

import java.util.Arrays;

public class Produto {
    private final String codigo;
    private String nome;
    private double preco;
    private int estoque;
    private double[] nfe;

    public Produto(String nome, String codigo, double preco, int estoque, double[] nfe) {
        if(codigo == null || codigo.isBlank()) {
            throw new IllegalArgumentException("O código é obrigatório!!");
        }

        if(preco <= 0){
            throw new IllegalArgumentException("Preço deve ser positivo.");
        }

        this.nome = nome;
        this.codigo = codigo;
        this.preco = preco;
        this.estoque = estoque;
        this.nfe = Arrays.copyOf(nfe, nfe.length);
    }

    public void vender(int qnt){
        if(qnt <= 0){
            throw new IllegalArgumentException("A quantidade de itens deve ser positivo.");
        }

        if(qnt > this.estoque){
            throw new IllegalArgumentException("Quantidade de produtos indisponível.");
        }

        estoque -= qnt;
    }

    public int getEstoque(){ return estoque; }
    public double[] getNfe(){ return Arrays.copyOf(nfe, nfe.length); }
}
