module.exports = function getSeason(date) {
	//throw new CustomError('Not implemented');

	if (date === undefined) return 'Unable to determine the time of year!';

	const time = date.getUTCMonth()

	if(time == 11 || time >= 0 && time <= 1) 
		return 'winter'

	if(time >= 2 && time <= 4) 
		return 'spring'

	if(time >= 5 && time <= 7) 
		return 'summer'

	if(time >= 8 && time <= 10) 
		return 'autumn'
}
