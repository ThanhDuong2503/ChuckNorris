FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Thanh Duong <thanh.duong@gmx.de>

ADD chucknorrisbackend/target/app.jar app.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /app.jar" ]
