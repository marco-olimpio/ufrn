package controle;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Conexao {
	
	private static EntityManager em;
	
	public Conexao(){
		
	}
	
	public static EntityManager getInstance(){
		if (em == null){
			EntityManagerFactory emf = 
					Persistence.createEntityManagerFactory("Aula04");
			em = emf.createEntityManager();
		}
		
		return em;
	}

}
