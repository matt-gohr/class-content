 Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Makes it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Makes a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Makes an numeric column called "score" --
  score INT NOT NULL DEFAULT 0
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50) DEFAULT 'Unknown',
  score INTEGER(10) DEFAULT 0,
  PRIMARY KEY(song, artist)
);

CREATE TABLE favorite_movies (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  movie VARCHAR(100) NOT NULL,
  -- Creates a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT false,
  score INTEGER(10) DEFAULT 0
);

-- Creates new rows containing data in all named columns --
INSERT INTO favorite_foods (food, score)
VALUES ("pizza", 25);

INSERT INTO favorite_songs (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO favorite_movies (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);
