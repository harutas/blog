import _dayjs, { ConfigType, OptionType } from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const JST = 'Asia/Tokyo';

_dayjs.extend(utc);
_dayjs.extend(timezone);

_dayjs.tz.setDefault('utc');

export const now = () => {
	return new Date();
};

/**
 * Dayjsオブジェクト
 */
export const dayjs = (date?: ConfigType, format?: OptionType, strict?: boolean) => {
	return _dayjs(date, format, strict);
};

/**
 * YYYY/MM/DD
 */
export const formatSlashYMD = (date: Date, tz?: string) => {
	return dayjs(date).tz(tz).format('YYYY/MM/DD');
};

/**
 * YYYY
 */
export const formatY = (date: Date, tz?: string) => {
	return dayjs(date).tz(tz).format('YYYY');
};
