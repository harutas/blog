export const SITE_TITLE = 'HaruTech';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';

export const AUTHOR_NAME = 'Harutas';

export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT ?? '';

export const isDevelopment = () => ENVIRONMENT !== 'production';
