package com.branchyr.survey;

public class Survey {

    private String name;
    private Question[] questions;

    public Survey() {
    }

    public Survey(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Question[] getQuestions() {
        return questions;
    }

    public void setQuestions(Question[] questions) {
        this.questions = questions;
    }
}
