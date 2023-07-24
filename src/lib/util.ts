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
};

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
