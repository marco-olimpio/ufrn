package controle;

import javax.persistence.EntityManager;
import modelo.Contato;

public class DAO {
	
	public void inserirContato(Contato c){
		EntityManager em = Conexao.getInstance();
		em.getTransaction().begin();
		em.persist(c);
		System.out.println("Registro " + c.getNome() + " inserido!");
		em.getTransaction().commit();
	}
	
	public void fecharConexao(){
		EntityManager em = Conexao.getInstance();
		em.close();
		System.out.println("Conexão Fechada!");
	}

}
