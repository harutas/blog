import { BASE_URL, isDevelopment } from '@/config';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: isDevelopment() ? undefined : '/',
			disallow: isDevelopment() ? '/' : undefined,
		},
		sitemap: `${BASE_URL}/sitemap.xml`,
	};
}
