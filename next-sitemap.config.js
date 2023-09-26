/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://owen-roth.com',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/thank-you'],
  // Default transformation function
  transform: async (config, path, priority) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/', 1.0),
    await config.transform(config, '/about'),
    await config.transform(config, '/articles'),
    await config.transform(config, '/photos'),
    await config.transform(config, '/projects'),
    await config.transform(config, '/uses'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you']
      },
    ],
  },
  }