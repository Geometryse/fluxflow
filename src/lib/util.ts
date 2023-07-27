export const formatTime = (timeStr: string) => {
	const match = timeStr.match(/(\d+)[^\d]*(\d+)/);
	if (!match) {
		throw new Error('Invalid time format');
	}

	let hours = parseInt(match[1]);
	const minutes = parseInt(match[2]);

	// Check if hours and minutes are valid
	if (hours > 23 || minutes > 59) {
		throw new Error('Invalid time');
	}

	// Check for incorrect mixed formats (24-hour time with am/pm)
	if (
		(hours > 12 && timeStr.toLowerCase().includes('am')) ||
		(hours > 12 && timeStr.toLowerCase().includes('pm'))
	) {
		throw new Error('Invalid time format');
	}

	let period = '';

	// Determine if input is in 24-hour format
	if (hours === 12 && timeStr.toLowerCase().includes('pm')) {
		period = ' PM'; // handle special case of noon
	} else if (hours === 12 && timeStr.toLowerCase().includes('am')) {
		period = ' AM'; // handle special case of midnight
	} else if (hours > 12) {
		period = ' PM';
		hours = hours - 12; // convert to 12-hour format if necessary
	} else if (timeStr.toLowerCase().includes('pm')) {
		period = ' PM';
	} else {
		period = ' AM';
	}

	// Format hours and minutes
	const hoursStr = hours === 0 ? '12' : hours < 10 ? `0${hours}`.slice(-2) : `${hours}`;
	const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;

	return `${hoursStr}:${minutesStr}${period}`;
	// console.log(formatTime("5:00"));      // 05:00 AM
	// console.log(formatTime("05:00"));     // 05:00 AM
	// console.log(formatTime("05 00"));     // 05:00 AM
	// console.log(formatTime("5:00am"));    // 05:00 AM
	// console.log(formatTime("5 00 am"));   // 05:00 AM
	// console.log(formatTime("3:00PM"));    // 03:00 PM
	// console.log(formatTime("15:00"));     // 03:00 PM
	// console.log(formatTime("3 00pm"));    // 03:00 PM
	// console.log(formatTime("3 00 pm"));   // 03:00 PM
	// console.log(formatTime("12:00 am"));  // 12:00 AM
	// console.log(formatTime("12:00 pm"));  // 12:00 PM
};

export const format = (x: number, use24HourTime: boolean) => {
	let hh = Math.floor(x / 60) % 24;
	const mm = x % 60;

	let extension = '';
	if (!use24HourTime) {
		if (hh > 12) {
			extension = ' pm';
			hh -= 12;
		} else if (hh === 0) {
			hh = 12;
			extension = ' am';
		} else if (hh === 12) {
			extension = ' pm';
		} else {
			extension = ' am';
		}
	}

	let hhStr = hh.toString();
	let mmStr = mm.toString();

	if (hhStr.length === 1 && use24HourTime) hhStr = '0' + hh;
	if (mmStr.length === 1) mmStr = '0' + mm;

	return `${hhStr}:${mmStr}${extension}`;
};
export function getMSSinceMidnight() {
	const now = new Date();
	const hours = now.getHours() * 60 * 60 * 1000; // convert hours to milliseconds
	const minutes = now.getMinutes() * 60 * 1000; // convert minutes to milliseconds
	const seconds = now.getSeconds() * 1000; // convert seconds to milliseconds
	const milliseconds = now.getMilliseconds(); // get milliseconds

	const totalMS = hours + minutes + seconds + milliseconds;
	return totalMS;
}

export const UTCToHours = (utc: number) => new Date(utc).getHours();
export const UTCToMinutes = (utc: number) => new Date(utc).getMinutes();
export const UTCToTotalMinutes = (utc: number) =>
	new Date(utc).getHours() * 60 + new Date(utc).getMinutes();
