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
 * ex: 2 min, 4 days, 1 month
 * @param date the date to convert
 */
export const dateToRelativeString = (date: Date): string => {
	const now = new Date()
	const diff = now.getTime() - date.getTime()
	const diffInMinutes = Math.floor(diff / (1000 * 60))
	const diffInHours = Math.floor(diffInMinutes / 60)
	const diffInDays = Math.floor(diffInHours / 24)
	const diffInMonths = Math.floor(diffInDays / 30)
	const diffInYears = Math.floor(diffInMonths / 12)

	if (diffInMinutes < 1) return 'just now'
	if (diffInMinutes < 60) return `${diffInMinutes} min`
	if (diffInHours < 24) return `${diffInHours} hours`
	if (diffInDays < 30) return `${diffInDays} days`
	if (diffInMonths < 12) return `${diffInMonths} months`
	return `${diffInYears} years`
}
