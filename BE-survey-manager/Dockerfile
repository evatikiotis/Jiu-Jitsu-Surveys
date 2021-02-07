FROM maven

COPY . /app
WORKDIR /app

ENTRYPOINT ["mvn","spring-boot:run"]


## Start with a base image containing Java runtime
#FROM openjdk:11-jre-slim
#
## Add maintainer
#LABEL maintainer="bjj-master team"0
#
## Create exploded jar in the image
#COPY target/dependency/BOOT-INF/lib /app/lib
#COPY target/dependency/META-INF /app/META-INF
#COPY target/dependency/BOOT-INF/classes/com /app/com
#COPY target/dependency/BOOT-INF/classes/application.yml /app
#COPY target/dependency/BOOT-INF/classes/logback-spring.xml /app
#WORKDIR /app
#
## Run the application on startup
#ENTRYPOINT ["java","-cp",".:lib/*","SurveyManagerApplication"]
#
## Only for documentation purposes
#EXPOSE 8080
#
#
#
## docker build -t bjj-master/serveymanager . && docker run -it -p 8080:8080 bjj-master/serveymanager
