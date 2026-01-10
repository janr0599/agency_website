import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/_next/static/images/'],
            disallow: '/private/',
        },
        sitemap: 'https://www.praxisflow.com/sitemap.xml',
    }
}
