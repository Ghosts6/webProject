---------- based on firstName
SELECT *
FROM Tickets
WHERE FirstName = 'SpecificPersonFirstName';
---------- based on userName
SELECT *
FROM Tickets
WHERE FirstName = (SELECT Username FROM Users WHERE UserID = 'LoggedInUserID');

