package com.branchyr.survey;

public class Answer {
    private String label;
    private int nextQuestion;

    public Answer() {}

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public int getNextQuestion() {
        return nextQuestion;
    }

    public void setNextQuestion(int id) {
        this.nextQuestion = id;
    }
}

