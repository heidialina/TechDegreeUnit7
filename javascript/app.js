// Alert notification 

function showNotification() {
	alert("Alert! Welcome to the Unit 7 project!\n\nAlert 2! Hope you enjoy!");
	alert("So many hours went to this!");
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

const trafficChart = document.getElementById('traffic-chart');
const trafficData = new Chart(trafficChart, {
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

const dailyTraffic = document.getElementById('daily-chart');
const dailyData = new Chart(dailyTraffic, {
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

const mobileTraffic = document.getElementById('mobile-chart');
const mobileData = new Chart(mobileTraffic, {
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

(function() {
	const boxes = document.querySelectorAll("input[type='checkbox']");
	for (let i = 0; i < boxes.length; i++) {
		const box = boxes[i];
		if (box.hasAttribute("store")) {
			setupBox(box);
		}
	}
	
	function setupBox(box) {
		const storageId = box.getAttribute("store");
		const oldVal    = localStorage.getItem(storageId);
		console.log(oldVal);
		box.checked = oldVal === "true" ? true : false;
		
		box.addEventListener("change", function() {
			localStorage.setItem(storageId, this.checked); 
		});
	}
})();

document.getElementById("timezone").onchange = function() {
    localStorage.setItem('timezone', document.getElementById("timezone").value);
}

if (localStorage.getItem('timezone')) {
    document.getElementById("timezone").options[localStorage.getItem('timezone')].selected = true;
}