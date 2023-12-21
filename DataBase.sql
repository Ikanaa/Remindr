

DROP TABLE IF EXISTS UserXGroup;
DROP TABLE IF EXISTS Reminder;
DROP TABLE IF EXISTS Groupe;
DROP TABLE IF EXISTS Utilisateur;


CREATE TABLE Utilisateur (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE
);


CREATE TABLE Groupe (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) UNIQUE,
  Owner INT NOT NULL,
  FOREIGN KEY (Owner) REFERENCES Utilisateur(id)
);

CREATE TABLE UserXGroup (
  id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    groupId INT,
    FOREIGN KEY (userId) REFERENCES Utilisateur(id),
    FOREIGN KEY (groupId) REFERENCES Groupe(id)
);


CREATE TABLE Reminder (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    body TEXT,
    creation DATETIME,
    expiration DATETIME,
    color VARCHAR(255),
    author VARCHAR(255),
    groupid INT,
    FOREIGN KEY (groupId) REFERENCES Groupe(id)
);
