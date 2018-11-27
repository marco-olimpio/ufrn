package br.ufrn.imd.jsf.controller;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.Map;
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
	private ArrayList<Student> students = new ArrayList<Student>();
	private Student student = new Student();
	private UIPanel resultPanel;
	private int result;

	public StudentController() {
//		this.addStudent("Marco"  , "1984-05-13");
//		this.addStudent("Rebecca", "1984-11-29");
//		this.addStudent("Mark"   , "2013-05-30");
//		this.addStudent("Lissa"  , "2017-03-30");
	}
	public Student getStudent() {
		return this.student;
	}
	public void setStudent(Student student) {
		System.out.println(student.getName());
		System.out.println(student.getBday());
		this.student = student;
	}
	
	
	public String addStudent() {
		//Map<String,String> params = FacesContext.getExternalContext().getRequestParameterMap();
		//String action = params.get("action");
		
		try {
			System.out.println(this.student.getName());
			System.out.println(this.student.getBday());
			student.setName("John");
			student.setBday("2018/01/01");
			students.add(student);
			System.out.println(this.students.size());
			System.out.println(this.students.get(0).getName());
			System.out.println(this.students.get(0).getBday());
			
			
			this.student = new Student();
			return "student";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "student";
	}

	public ArrayList<Student> getAllStudents(){
		return this.students;
	}
	
	public int getNumberOfStudents() {
		return this.students.size();
	}
		
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
	
	private int getNextId() {
		try {
			int size = students.size();
			return size+1;
		}catch(Exception e) {
			e.printStackTrace();
		}
		return 1;
	}
}
