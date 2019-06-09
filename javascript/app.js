// Alert notification 

function showNotification() {
	alert("Here is the first alert!");
	alert("And second one just after!");
}

// active 

// var trafficNav = document.getElementById("traffic-nav");
// var selected = trafficNav.getElementsByClassName("list");
// for (var i = 0; i < selected.length; i++) {
//  selected[i].addEventListener("click", function() {
//    var current = document.getElementsByClassName("active");
//    current[0].className = current[0].className.replace(" active", "");
//    this.className += " active";
//  });
//} 

// traffic widget 

var trafficChart = document.getElementById('traffic-chart');
var trafficData = new Chart(trafficChart, {
	type: 'line',
	data: {
		labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
		datasets: [{
			label: 'Hourly',
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
		},
			{
			label: 'Daily',
			data: [550, 1350, 1200, 1000, 1300, 1250, 1750, 1450, 1250, 1400, 2300],
			hidden: true,
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
		},
			{
			label: 'Weekly',
			data: [730, 1220, 1030, 1200, 1600, 1140, 1190, 1800, 2500, 1100, 2100],
			hidden: true,
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
		},
			{
			label: 'Monthly',
			data: [150, 1050, 1700, 1700, 1250, 1350, 1300, 1550, 2250, 1700, 2400],
			hidden: true,
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
		}
]
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
			display: true
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

// Saving settings to local storage