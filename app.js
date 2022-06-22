 /*-------------------
 Notifications
 -------------------*/ 
 const notifications = document.querySelector('#notifications');

// --------- Dropdown Tab ----------- 
 notifications.innerHTML = `<ol class="notify-dropdown">
  <li>Tim Sanders posted 24 hours ago</li>
  <li>Victoria Chambers commented on a post</li>
  <li class="exit">X</li>
  </ol>`;
  notifications.style.display = 'none';  

 const notify = document.querySelector('svg');
 const showNotify = document.querySelector('span');
 notify.addEventListener('click', (e) => {
    notifications.style.display = 'block';  
    showNotify.style.display = 'none';
 });

 // ----------- Exit Dropdown ------------
 const exit = document.querySelector('.exit');
 exit.addEventListener('click', (e) => {
  const exitBtn = e.target;
  if (exitBtn.classList.contains('exit')) {
    notifications.style.display = 'none';
  }
 });

 /*-------------------
 Alert Banner
 -------------------*/
const alertBanner = document.querySelector('#alert');
alertBanner.innerHTML = 
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have a few <strong>unread</strong> messages</p>
    <p class="alert-banner-close">X</p>
</div>`;
alertBanner.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = 'none';
    }
});
 
 /*-----------------------------
 SearchField Autocomplete
 -----------------------------*/ 
 let names = ['Spencer James', 'Jackson Avery', 'Harry Potter', 'Hermoine Granger', 'Iris West', 'Meredith Grey', 'Lucas Sinclair', 'Dustin Henderson', 'Richard Webber', 'Choi Young']; 
 // Names arranged in alphabetical order
 let sortedNames = names.sort();
 
 let searchField = document.querySelector('#user');
 searchField.addEventListener('keyup', (e) => {
 });

/*-------------------
 Messaging Section
 -------------------*/  
 const user = document.querySelector('#user');
 const message = document.querySelector('#message');
 const send = document.querySelector('#send');
 const errorBanner = document.querySelector('#error-msg');
 errorBanner.style.display = 'none';

 // This function will display error / success message for 3s then disappear
 function errorDisplay () {
  errorBanner.style.display = 'block';
  setTimeout(() => errorBanner.style.display = 'none', 3000);
 } 

 send.addEventListener('click', (e) => {
  e.preventDefault();
    if (user.value === "" && message.value === "") {
      errorBanner.textContent = `Please fill out user and message fields before sending`;
      errorDisplay();
    } else if (user.value === "" ) {
      errorBanner.textContent = `Please fill out user field before sending`;
      errorDisplay();
    } else if (message.value === "" ) {
      errorBanner.textContent = `Please fill out message field before sending`;
      errorDisplay();
    } else {
      errorBanner.textContent = `Message successfully sent to: ${user.value}`;
      errorDisplay();
        user.value = "";
        message.value = "";
    }
 });

 /*-------------------
 Local Storage
 -------------------*/  

/*-------------------
 Chart Widgets
 -------------------*/

 // Line Graph
 const trafficCanvas = document.getElementById('traffic-chart');

 let trafficData = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [400, 550, 1025, 1000, 2000, 1500, 1575, 1300, 1700, 2200, 1500, 2800],
        backgroundColor: 'rgba(108, 196, 237, .8)',
        borderWidth: 1,
    }]
 };

 let trafficOptions = {
    backgroundColor: 'rgba(119, 204, 244, .8)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: { 
        y: { beginAtZero: true }
    }, 
    plugins: {
      legend: { display: false }
 
    } 
 };

 let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
  }); 

  // Hourly Chart 
  // Daily Chart
  // Weekly Chart 
  // Monthly Chart 


 // Bar Graph
 const dailyCanvas = document.getElementById('daily-chart');

 const dailyData =  {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(11, 69, 96, 0.8)',
        borderWidth: 1
    }] 
  };

  const dailyOptions = {
    scales: { 
        y: { beginAtZero: true } 
    },
    plugins: {
        legend: { display: false }
    } 
  };

  let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
  });

    // Doughnut Chart
  const mobileCanvas = document.getElementById('mobile-users-chart');

  const mobileData = {
      labels: ["Desktop", "Tablet", "Phones"],
      datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
          'rgba(11, 69, 96, 0.8)',
          '#78CF82',
          '#51B6C8'
        ] 
      }]
    };

  const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 20,
          fontStyle: 'bold'
        }
    } }
  };

  let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
  });
