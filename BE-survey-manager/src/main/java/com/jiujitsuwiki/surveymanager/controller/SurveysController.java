package com.jiujitsuwiki.surveymanager.controller;

import com.jiujitsuwiki.surveymanager.dto.SurveyDTO;
import com.jiujitsuwiki.surveymanager.model.Survey;
import com.jiujitsuwiki.surveymanager.service.GoogleDriveFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * survey REST API endpoints
 */

@RestController
@RequestMapping("/surveys")
public class SurveysController {

    private GoogleDriveFileService googleDriveFileService;

    @Autowired
    public SurveysController(GoogleDriveFileService googleDriveFileService) {
        this.googleDriveFileService = googleDriveFileService;
    }

    /**
     * get all surveys
     *
     * @return
     * @throws Exception
     */
    @GetMapping
    public ResponseEntity<List<SurveyDTO>> getAllSurveys() throws Exception {
        return ResponseEntity.ok(
                googleDriveFileService.getSurveys()
                        .stream()
                        .map(Survey::toDto)
                        .collect(Collectors.toList()));
    }

}
