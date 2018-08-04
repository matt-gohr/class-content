DROP DATABASE IF EXISTS bids_db;

CREATE DATABASE bids_db;

USE bids_db;

CREATE TABLE bids (
  id INT NOT NULL AUTO_INCREMENT,
  items VARCHAR(45) NULL,
  bid INT NOT NULL,
  PRIMARY KEY (id)
);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
