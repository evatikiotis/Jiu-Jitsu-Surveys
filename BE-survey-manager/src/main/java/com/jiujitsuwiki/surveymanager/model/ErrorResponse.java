package com.jiujitsuwiki.surveymanager.model;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class ErrorResponse {
    private LocalDateTime timestamp;
    private int httpResponse;
    private String message;
}
