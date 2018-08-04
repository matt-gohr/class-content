CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id INT NOT NULL AUTO_INCREMENT,
  chirp varchar(30),
  primary key  ( 'id' )
);
