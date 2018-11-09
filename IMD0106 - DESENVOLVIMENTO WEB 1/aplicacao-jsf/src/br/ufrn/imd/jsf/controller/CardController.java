package br.ufrn.imd.jsf.controller;

import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIPanel;
import javax.faces.context.FacesContext;

import br.ufrn.imd.jsf.model.Card;

@ManagedBean(name = "cardController")
@SessionScoped
public class CardController {
	private Card card;
	private UIPanel resultPanel;
	private int result;

	public CardController() {
		card = new Card();
	}

	public String checkResult() {
		FacesContext context = FacesContext.getCurrentInstance();
		resultPanel.setRendered(true);
		
		if (checkOperation()) {
			context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Correct", null));
		} else {
			context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Incorrect", null));
		}
		return "trainer";
	}

	private boolean checkOperation() {
		return (card.getLeft() + card.getRight() == result);
	}

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

	public String next() {
		FacesContext context = FacesContext.getCurrentInstance();
		if (checkOperation()) {
			resultPanel.setRendered(false);
			card = new Card();
			return null;
		} else {
			context.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Incorrect", null));
		}
		return "trainer";

	}

	public Card getCard() {
		return card;
	}

	public void setCard(Card card) {
		this.card = card;
	}
}
