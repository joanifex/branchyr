package com.branchyr.survey;

public class Question {
    private String label;
    private int id;
    private Answer[] answers;
    private int selected;

    public Question() {}

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Answer[] getAnswers() {
        return answers;
    }

    public void setAnswers(Answer[] answers) {
        this.answers = answers;
    }

    public int getSelected() {
        return selected;
    }

    public void setSelected(int id) {
        this.selected = id;
    }

}

