package br.ufrn.imd.jsf.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Student {
	private String name;
	private java.util.Date bday;

	public Student() {
		name = "";
		bday = new Date();
	}

	public Student(String name, java.util.Date bday) {
		this.name = name;
		this.bday = bday;
	}
	
	public String getBDay() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		return dateFormat.format(bday);
	}
	
	public void setBDay(java.util.Date bday) {
		this.bday = bday;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

}