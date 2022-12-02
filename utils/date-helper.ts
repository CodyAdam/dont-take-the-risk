/**
 * get the date relative to now minus the inputed date
 * @param date the date subtracted to now
 */
export const negativeDate = (
	minutes?: number,
	hours?: number,
	days?: number
): Date => {
	const date = new Date()
	date.setMinutes(date.getMinutes() - (minutes || 0))
	date.setHours(date.getHours() - (hours || 0))
	date.setDate(date.getDate() - (days || 0))
	return date
}

/**
 * Date to readable string relative to now
 * ex: 2 min ago, 4 days ago
 * if more than 1 week ago, return the short date
 * @param date the date to convert
 */
export const formatDate = (
	date: Date,
	ago: boolean = false
): string => {
	const now = new Date()
	const diff = now.getTime() - date.getTime()
	const diffDays = Math.floor(diff / (1000 * 3600 * 24))
	const diffHours = Math.floor(diff / (1000 * 3600))
	const diffMinutes = Math.floor(diff / (1000 * 60))
	if (diffDays >= 7) {
		return date.toLocaleDateString()
	}
	if (diffDays >= 1) {
		return `${diffDays} days` + (ago ? ' ago' : '')
	}
	if (diffHours >= 1) {
		return `${diffHours} h` + (ago ? ' ago' : '')
	}
	if (diffMinutes > 1) {
		return `${diffMinutes} min` + (ago ? ' ago' : '')
	}
	return 'just now'
}
