package com.branchyr.survey;

import java.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/surveys")
public class SurveyController {
    @Autowired

    private final SurveyRepository surveyRepository;

    public SurveyController(SurveyRepository surveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody Survey getSurvey() throws IOException {
        Survey survey = surveyRepository.find(1);
        return survey;
    }
}
