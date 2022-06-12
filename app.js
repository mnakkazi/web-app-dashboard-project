/*-------------------
 Alert Banner
 -------------------*/
const alert = document.querySelector('#alert');
alert.innerHTML = 
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
</div>`;
alert.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alert.style.display = 'none';
    }
});

/*-------------------
 Chart Widgets
 -------------------*/

 // Line Graph
 const trafficCanvas = document.getElementById('traffic-chart');

 let trafficData = {
    labels: ['16.22', '23.29', '30.5', '6.12', '13.19', '20.26', '27.3', '4.10', '11.17', '18.24', '25.31'],
    datasets: [{
        data: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500],
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
const mobileCanvas = document.getElementById('#mobile-users-chart');

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

/*-------------------
 Messaging Section
 -------------------*/  
 const user = document.querySelector('#user');
 const message = document.querySelector('#message');
 const send = document.querySelector('#send');

 send.addEventListener('click', (e) => {
    if (user.value === "" && message.value === "") {
      alert('Please fill out user and message fields before sending');
    } else if (user.value === "" ) {
      alert('Please fill out user field before sending');
    } else if (message.value === "" ) {
      alert('Please fill out message field before sending');
    } else {
      alert(`Message successfully sent to: ${user.value}`);
    } 
  });