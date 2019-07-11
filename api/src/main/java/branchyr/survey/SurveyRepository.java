package com.branchyr.survey;

import java.io.File;
import java.io.IOException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class SurveyRepository {

    private final String path = "src/main/java/branchyr/survey/survey.json";

    public SurveyRepository() {}

    public Survey find(int id) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("src/main/java/branchyr/survey/survey.json");
        Survey survey = objectMapper.readValue(file, Survey.class);
        return survey;
    }
}
