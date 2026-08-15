package aula01_06;

public class NotificadorSMS implements Notificador{
    public void enviar (String destinatario, String mensagem){
        System.out.println("[SMS] para: " + destinatario);
        System.out.println("       " + mensagem);
    }
}