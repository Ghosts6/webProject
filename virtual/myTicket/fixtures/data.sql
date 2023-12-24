# tabel design
# login tabel
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL
);

# ticket tabel
CREATE TABLE Tickets (
    TicketID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateTime DATETIME NOT NULL,
    DepartmentName VARCHAR(100) NOT NULL,
    RequestType VARCHAR(100) NOT NULL,
    Description TEXT NOT NULL,
    PriorityLevel INT NOT NULL
);
# admin tabel
CREATE TABLE admin_login (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

# defualt admin
INSERT INTO admin_login (username, password) VALUES ('admin', 'admin123');
INSERT INTO admin_login (username, password) VALUES ('agent', 'B@zdid@321');
INSERT INTO Users (username, password) VALUES ('kia', 'KB123456');
INSERT INTO Users (Username, password) VALUES ('test', 'test123');
# tabel to sort admin notes
CREATE TABLE ticket_notes (
    note_id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id INT NOT NULL,
    admin_id INT NOT NULL,
    note_text TEXT,
    change_status ENUM('done', 'in_progress', 'not_seen'),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ticket_id) REFERENCES admin_tickets(ticket_id),
    FOREIGN KEY (admin_id) REFERENCES admin_login(admin_id)
);

----------------------------------------------------------------
# queries
SELECT Username, Password
FROM Users;

SELECT FirstName, LastName, DateTime, RequestType
FROM Tickets;

SELECT U.Username, T.RequestType, T.DateTime, T.Description
FROM Users U
JOIN Tickets T ON U.Username = T.Username;
