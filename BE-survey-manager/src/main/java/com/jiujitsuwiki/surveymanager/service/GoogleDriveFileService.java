package com.jiujitsuwiki.surveymanager.service;

import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.jiujitsuwiki.surveymanager.model.Survey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class GoogleDriveFileService {

    Logger logger = LoggerFactory.getLogger(GoogleDriveFileService.class);
    private Drive googleDriveClient;


    @Autowired
    public GoogleDriveFileService(Drive googleDriveClient) {
        this.googleDriveClient = googleDriveClient;
    }

    /**
     * get all available Surveys from GoogleDrive. Keep in mind that when users share folders with the service account,
     * the service account just see files and no reference to the folder
     *
     * @return List of {@link Survey}
     * @throws Exception
     */
    //TODO: cache
    public List<Survey> getSurveys() throws Exception {

        // Print the names and IDs for up to 10 files.
        FileList result = googleDriveClient.files().list()
                .setPageSize(100)
                .setFields("nextPageToken, files(id, name, createdTime, mimeType)")
                .execute();

        //TODO: handle nextPageToken
        //TODO: handle folders. Releases of new forms are going to be in new folders, so we have to handle that
        List<File> files = result.getFiles();
        if (files == null || files.isEmpty()) {
            throw new Exception("No File Found!");
        }
        List<Survey> surveys = files
                .stream()
                .filter(file -> file.getMimeType().equals("application/vnd.google-apps.form"))
                .map(file -> new Survey(file.getId(), file.getName(), file.getCreatedTime()))
                .collect(Collectors.toList());
        logger.info("Found " + surveys.size() + " surveys");
        if (surveys.isEmpty()) {
            logger.error("no survey found");
            throw new Exception("No Forms found Found!");
        }
        return surveys;


    }


}


