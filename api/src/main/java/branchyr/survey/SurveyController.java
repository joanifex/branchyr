package com.branchyr.survey;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.File;
import java.io.IOException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class SurveyController {

    @RequestMapping("/survey/1")
    public Survey survey() throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("src/main/java/branchyr/survey/survey.json");
        Survey survey = objectMapper.readValue(file, Survey.class);
        return survey;
    }
}
