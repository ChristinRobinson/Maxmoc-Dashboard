const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('#sidebar');
let sidebarOpen = false;

hamburger.addEventListener('click', () => {
	if (!sidebarOpen) {
		hamburger.classList.add('open');
		sidebar.classList.add('open');
		sidebarOpen = true;
	} else if (sidebarOpen) {
		hamburger.classList.remove('open');
		sidebar.classList.remove('open');
		sidebarOpen = false;
	}
});

const connectionNetworkManagement = document.querySelector(
	'#connection-network-management'
);
const mapsCalibration = document.querySelector('#maps-calibration');
const measurementBroadcast = document.querySelector('#measurement-broadcast');
const measurementProprietary = document.querySelector(
	'#measurement-proprietary'
);
const diagnostics = document.querySelector('diagnostics');
