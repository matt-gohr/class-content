-- Created the DB "wishes_db" (only works on local connections)
CREATE DATABASE wishes_db;
USE wishes_db;

-- Created the table "schools"
CREATE TABLE wishes (
  id int AUTO_INCREMENT,
  wish varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO wishes (wish) VALUES ("Master CSS");
INSERT INTO wishes (wish) VALUES ("Learn Node");
INSERT INTO wishes (wish) VALUES ("Win Lotto");
