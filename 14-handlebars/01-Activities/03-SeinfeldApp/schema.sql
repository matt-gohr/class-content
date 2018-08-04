-- Created the DB "seinfeld_db" (only works on local connections)
CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "schools"
CREATE TABLE actors (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  coolness_points int not null,
  attitude varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO schools (name, coolness_points, attitude) VALUES ("jerry", 100, 'funny');
INSERT INTO schools (name, coolness_points, attitude) VALUES ("matt", 3000, 'awesome');
INSERT INTO schools (name, coolness_points, attitude) VALUES ("andy", 5, 'not funny');
INSERT INTO schools (name, coolness_points, attitude) VALUES ("john", 101, 'teacher');
