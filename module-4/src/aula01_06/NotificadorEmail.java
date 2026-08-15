package aula01_06;

public class NotificadorEmail implements Notificador{
    public void enviar(String destinatario, String mensagem){
        System.out.println("[E-mail] para: " + destinatario);
        System.out.println("       " + mensagem);
    }
}
