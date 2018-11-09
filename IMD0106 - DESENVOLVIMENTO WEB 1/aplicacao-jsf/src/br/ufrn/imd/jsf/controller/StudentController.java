package br.ufrn.imd.jsf.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.Set;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIPanel;
import javax.faces.context.FacesContext;

import br.ufrn.imd.jsf.model.Card;
import br.ufrn.imd.jsf.model.Student;


@ManagedBean(name = "studentController")
@SessionScoped
public class StudentController {
	final String lexicon = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345674890";
	final Set<String> identifiers = new HashSet<String>();
	final java.util.Random rand = new java.util.Random();
	private ArrayList<Student> students;
	private Student student;
	private UIPanel resultPanel;
	private int result;

	public StudentController() {
		new Student();
	}
	public Student getStudent() {
		return this.student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public boolean addStudent() {
		boolean retorno = false;
		
		try {
			Student auxStudent = new Student(getRandomName(),getRandomDateOfBirth());
			
			if(students.add(auxStudent))
					retorno = true;
		} catch (Exception e) {
			e.printStackTrace();
			retorno = false;
		}
		
		return retorno;
	}
	
	public boolean addStudent(String name, String bday) {
		DateFormat formatter = new SimpleDateFormat("d-MM-yyyy");
		Date date;
		boolean retorno = false;
		
		try {
			date = (Date) formatter.parse(bday);
			Student auxStudent = new Student(name,date);
			
			if(students.add(auxStudent))
					retorno = true;
		} catch (ParseException e) {
			e.printStackTrace();
			retorno = false;
		}
		
		return retorno;
	}
	
//	public String checkResult() {
//		FacesContext context = FacesContext.getCurrentInstance();
//		resultPanel.setRendered(true);
//		
//		if (checkOperation()) {
//			context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Correct", null));
//		} else {
//			context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Incorrect", null));
//		}
//		return "trainer";
//	}

//	private boolean checkOperation() {
//		return (card.getLeft() + card.getRight() == result);
//	}

	public UIPanel getResultPanel() {
		return resultPanel;
	}

	public void setResultPanel(UIPanel resultPanel) {
		this.resultPanel = resultPanel;
	}

	public int getResult() {
		return result;
	}

	public void setResult(int result) {
		this.result = result;
	}

	public ArrayList<Student> getAllStudents(){
		return this.students;
	}
	
//	public String next() {
//		FacesContext context = FacesContext.getCurrentInstance();
//		if (checkOperation()) {
//			resultPanel.setRendered(false);
//			card = new Card();
//			return null;
//		} else {
//			context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Incorrect", null));
//		}
//		return "trainer";
//
//	}

//	public Card getCard() {
//		return card;
//	}
//
//	public void setCard(Card card) {
//		this.card = card;
//	}
	
	private java.util.Date getRandomDateOfBirth(){
		GregorianCalendar gc = new GregorianCalendar();
		
		int year = randBetween(1900, 2018);
		gc.set(Calendar.YEAR, year);
		
		int day = randBetween(1, gc.getActualMaximum(Calendar.DAY_OF_YEAR));
		gc.set(Calendar.DAY_OF_YEAR, day);
		
		return new java.util.Date(gc.get(Calendar.YEAR), gc.get(Calendar.MONTH), gc.get(Calendar.DAY_OF_MONTH));	
	}
	
	private int randBetween(int start, int end) {
        return start + (int)Math.round(Math.random() * (end - start));
    }
	
	public String getRandomName() {
	    StringBuilder builder = new StringBuilder();
	    while(builder.toString().length() == 0) {
	        int length = rand.nextInt(5)+5;
	        for(int i = 0; i < length; i++) {
	            builder.append(lexicon.charAt(rand.nextInt(lexicon.length())));
	        }
	        if(identifiers.contains(builder.toString())) {
	            builder = new StringBuilder();
	        }
	    }
	    return builder.toString();
	}
}
