package com.jiujitsuwiki.surveymanager.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

@AllArgsConstructor
@Getter
public class SurveyDTO implements Serializable {
    private String id;
    private String name;
    private String createdDate;

    private SurveyDTO() {
    }
}
