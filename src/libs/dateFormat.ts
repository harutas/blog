import dayjs from 'dayjs';

/**
 * YYYY/MM/DD
 */
export const formatSlashYMD = (date: Date) => {
	return dayjs(date).format('YYYY/MM/DD');
};

/**
 * YYYY
 */
export const formatY = (date: Date) => {
	return dayjs(date).format('YYYY');
};
