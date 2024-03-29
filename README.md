# webProject
This is source code of website that i write to manage it team requests from client
purpose of this site is to help it team with client request such as repair,hardware issue,and etc
the site create from differend pages that give user ability to create ticket manage them and check the ticket status
and in other hand admin can see all tickets from users manage them write note for them and give each ticket status

# Technology:
For backend i used django which is python web frame work and to mange data i setup sql/sqllite nearby models.py 
our project include one main project and one main application and another side application.
And for front i used html/css/js
![road map](https://github.com/Ghosts6/webProject/blob/main/Screenshot_20231223-112758_PowerPoint.jpg)
# sit roadmap:
our sit include from 10 diffrend pages for user and 2 pages for admin and some pages for error like 404 and lookout
![road map](https://github.com/Ghosts6/webProject/blob/main/Screenshot_20231223-111509_PowerPoint.jpg)
# Directory Structure of Django Project 'myTicket':
```bash
virtual
└── myTicket
    ├── Ticket
    │   ├── __init__.py
    │   ├── admin.py
    │   ├── apps.py
    │   ├── custom_backend.py
    │   ├── migrations
    │   │   └── ...
    │   ├── models.py
    │   ├── tests.py
    │   ├── urls.py
    │   └── views.py
    ├── myTicket
    │   ├── __init__.py
    │   ├── asgi.py
    │   ├── settings.py
    │   ├── static
    │   │   ├── admin
    │   │   ├── css
    │   │   ├── favicon
    │   │   ├── images
    │   │   ├── js
    │   │   └── static.json
    │   ├── templates
    │   ├── urls.py
    │   ├── wsgi.py
    │── fixtures
    │   └── ... (contents of the fixtures folder)
    └── db.sqlite3
    └── manage.py
```
# code sample:
here we can saw one of our page layout:
![main.html](https://github.com/Ghosts6/webProject/blob/main/Screenshot_20231223-114607_Gallery.jpg)
```html
{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Main Page</title>
  <link rel="apple-touch-icon" sizes="180x180" href="{% static 'favicons/apple-touch-icon.png'%}">
  <link rel="icon" type="image/png" sizes="32x32" href="{% static 'favicons/favicon-32x32.png'%}">
  <link rel="manifest" href="{% static 'favicons/site.webmanifest'%}">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <link rel="stylesheet" href="{% static 'css/main.css'%}">
</head>
<body>

  <div class="clock-container">
    <div id="clock"></div>
  </div>

  <div class="main-container">
    <h1>Welcome to IT Support</h1>
    <p>If you need assistance, please submit an IT request:</p>
    <form id="itRequestForm" class="it-request-form">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required>
      </div>
      <div class="form-group">
          <label for="date">Date (Iran/Tehran Timezone):</label>
          <input type="date" id="date" name="date" required>
      </div>
      <div class="form-group">
        <label for="departmentName">Department Name:</label>
        <input type="text" id="departmentName" name="departmentName" required>
      </div>
      <div class="form-group">
        <label for="requestType">Type of Request:</label>
        <select id="requestType" name="requestType" required>
          <option value="hardwareIssue">Hardware Issue</option>
          <option value="softwareIssue">Software Issue</option>
          <option value="updateUpgrade">Update & Upgrade</option>
          <option value="installProgram">Install Program</option>
          <option value="boostSystem">Boost System</option>
          <option value="repair">Repair</option>
        </select>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="workForce">How forceful is your work?</label>
        <input type="range" id="workForce" name="workForce" min="0" max="10" step="1" value="5">
      </div>
      <div class="form-group">
         <a class="redirect-button" href="{% url 'redirect' %}">Submit</a>
      </div>
    </form>
  </div>

  <script src="{% static 'js/main.js' %}">"></script>
</body>
</html>

```

```css
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}


body {
  overflow: hidden;
  background: linear-gradient(-45deg, #FFC300, #FF5733, #C70039, #900C3F, #581845);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

:root {
  --primary-color: #007bff;
  --secondary-color: #060606; 
  --black-color: black; 
  --yellow-color: #FFD700; 
}


.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
}


.main-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9; 
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="datetime-local"],
select,
textarea {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
}
.redirect-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.redirect-button:hover {
  background-color: #0056b3;
}
.confirmation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7); 
  position: relative;
  z-index: 1; 
}

.submitted-notification {
  text-align: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 70%;
  margin: auto;
}

.add-request-link {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.add-request-link {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.add-request-link:hover {
  background-color: var(--secondary-color); 
}


```

```js
document.addEventListener("DOMContentLoaded", function () {
  const itRequestForm = document.getElementById('itRequestForm');


  function getCurrentIranTime() {
    const options = { timeZone: 'Asia/Tehran', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date().toLocaleTimeString('en-US', options);
  }

  
  function updateClock() {
    const clockElement = document.getElementById('clock');
    clockElement.textContent = getCurrentIranTime();
  }

  
  setInterval(updateClock, 1000);

  itRequestForm.addEventListener('submit', function (event) {
    event.preventDefault();

    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const departmentName = document.getElementById('departmentName').value.trim();
    const date = document.getElementById('date').value.trim(); // Retrieve date value

    
    if (firstName !== '' && lastName !== '' && departmentName !== '' && date !== '') {
      window.location.href = "redirect.html";
    } else {
     
      alert('Please fill in First Name, Last Name, Department Name, and Date to submit.');
    }
  });
});

```
```python
def main(request):
    if request.method == 'POST':
        form = ITRequestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('redirect')  
    else:
        form = ITRequestForm()

    return render(request, 'Ticket/main.html', {'form': form})
```
