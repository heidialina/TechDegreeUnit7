// active 

var trafficNav = document.getElementById("traffic-nav");
var selected = trafficNav.getElementsByClassName("list");
for (var i = 0; i < selected.length; i++) {
  selected[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Close alert

/*const alert = document.getElementById('alert');
alert.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains('close-alert')) {
		alert.style.display = 'none';
	}
});*/

// traffic widget 

var trafficChart = document.getElementById('traffic-chart');
var trafficData = new Chart(trafficChart, {
	type: 'line',
	data: {
		labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets: [{
			label: '',
			data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
			backgroundColor: [
				'rgba(123,223,242,0.10)',
				'rgba(178,247,239,0.10)',
				'rgba(239,247,246,0.10)',
				'rgba(247,214,224,0.10)',
				'rgba(242,181,212,0.10)',
				'rgba(123,223,242,0.10)',
				'rgba(178,247,239,0.10)',
				'rgba(239,247,246,0.10)',
				'rgba(247,214,224,0.10)',
				'rgba(242,181,212,0.10)',
				'rgba(123,223,242,0.10)'
			],
			borderColor: [
				'rgba(123,223,242,1)',
				'rgba(178,247,239,1)',
				'rgba(239,247,246,1)',
				'rgba(247,214,224,1)',
				'rgba(242,181,212,1)',
				'rgba(123,223,242,1)',
				'rgba(178,247,239,1)',
				'rgba(239,247,246,1)',
				'rgba(247,214,224,1)',
				'rgba(242,181,212,1)',
				'rgba(123,223,242,1)'
			],
			borderWidth: 1, 
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
                }
            }]
        },
		legend: {
			display: false
		}
    }
});

// daily traffic 

var dailyTraffic = document.getElementById('daily-chart');
var dailyData = new Chart(dailyTraffic, {
	type: 'bar',
	data: {
		labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
		datasets: [{
			label: '',
			data: [75, 115, 157, 125, 225, 200, 100],
			backgroundColor: [
				'rgba(123,223,242,0.4)',
				'rgba(178,247,239,0.4)',
				'rgba(239,247,246,0.4)',
				'rgba(247,214,224,0.4)',
				'rgba(242,181,212,0.4)',
				'rgba(123,223,242,0.4)',
				'rgba(178,247,239,0.4)'
			],
			borderColor: [
				'rgba(123,223,242,1)',
				'rgba(178,247,239,1)',
				'rgba(239,247,246,1)',
				'rgba(247,214,224,1)',
				'rgba(242,181,212,1)',
				'rgba(123,223,242,1)',
				'rgba(178,247,239,1)'
			],
			borderWidth: 1, 
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
                }
            }]
        },
		legend: {
			display: false
		}
    }
});

// donut

var mobileTraffic = document.getElementById('mobile-chart');
var mobileData = new Chart(mobileTraffic, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktops'],
		datasets: [{
			label: '',
			data: [75, 115, 157],
			backgroundColor: [
				'rgba(123,223,242,0.4)',
				'rgba(178,247,239,0.4)',
				'rgba(239,247,246,0.4)'
			],
			borderColor: [
				'rgba(123,223,242,1)',
				'rgba(178,247,239,1)',
				'rgba(239,247,246,1)'
			],
			borderWidth: 1, 
		}]
	},
	options: {
		/*scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
                }
            }]
        },*/
		legend: {
			position: 'right',
			labels: {
				boxWidth: 20,
				fontStyle: 'bold',
				padding: 20
			}
		}
    }
});

// Message field

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
	if (user.value === "" && message.value === "") {
		alert("Please fill out user and message fields before sending");
	} else if (user.value === "") {
		alert("Please fill out the user field before sending"); 
	} else if (message.value === "") {
		alert("Please fill out the message field before sending");
	} else {
		alert(`Message successfully sent to: ${user.value}`);
	}
});