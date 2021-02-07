package com.jiujitsuwiki.surveymanager.model;

import com.google.api.client.util.DateTime;
import com.jiujitsuwiki.surveymanager.dto.SurveyDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.text.SimpleDateFormat;
import java.util.Date;

@AllArgsConstructor
@Getter
public class Survey {
    private String id;
    private String name;
    private DateTime createdTime;

    private Survey() {
    }

    public SurveyDTO toDto() {
        long unixSeconds = createdTime.getValue();
        // convert seconds to milliseconds
        Date date = new java.util.Date(unixSeconds);
        // the format of your date
        SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy");
        // give a timezone reference for formatting
        sdf.setTimeZone(java.util.TimeZone.getTimeZone("GMT-4"));
        String formattedDate = sdf.format(date);
        return new SurveyDTO(this.id, this.name, formattedDate);
    }
}
