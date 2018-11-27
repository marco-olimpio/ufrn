package br.ufrn.imd.jsf.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Student {
	private String name;
	private String bday;
	private int id;

//	public Student() {
////		name = "";
////		bday = new Date();
////		id = 0;
//	}
//	
	public String getBday() {
		return bday;
	}
	
	public void setBday(String bday) {
		this.bday = bday;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
	}

}