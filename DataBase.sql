-- Création de la base de données
CREATE DATABASE remindr_database;

-- Utilisation de la base de données
USE remindr_database;

-- Création de la table User
CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE
);

-- Création de la table Group
CREATE TABLE Group (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE
);

-- Création de la table Reminder
CREATE TABLE Reminder (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  dueDate DATETIME,
  color VARCHAR(255),
  groupId INT,
  FOREIGN KEY (groupId) REFERENCES Group(id)
);
