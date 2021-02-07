package com.jiujitsuwiki.surveymanager.configuration;

import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;

/**
 * Google drive client configuration.
 */

@Configuration
public class GoogleDriveClientConfiguration {
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    private static final List<String> SCOPES = Collections.singletonList(DriveScopes.DRIVE);
    private static final String APPLICATION_NAME = "survey-application";
    private static final String PATH_TO_AUTHENTICATION_FILE = "/c0ddaaf0d65f39750b49ad2ee09383bb97f2e76e.json";

    /**
     * Google Drive client configuration for service account
     * <p>
     * Keep in mind that the following are prerequisites for googleDriveClient Bean to be initialized
     * 1.  Google Drive API enabled
     * 2.  Service account with the right roles
     * 3.  JSON file for authentication with name the API_KEY
     * 4.  Files and Surveys are visible to the service account user only if
     * real users share their files and forms with the service account user
     *
     * @return {@link Drive} instance
     * @throws IOException
     * @throws GeneralSecurityException
     */
    @Bean
    public Drive googleDriveClient() throws IOException, GeneralSecurityException {
        GoogleCredentials googleCredentials = GoogleCredentials.fromStream(this.getClass().getResourceAsStream(PATH_TO_AUTHENTICATION_FILE))
                .createScoped(SCOPES);
        final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
        HttpRequestInitializer requestInitializer = new HttpCredentialsAdapter(googleCredentials);
        return new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, requestInitializer)
                .setApplicationName(APPLICATION_NAME)
                .build();
    }
}
