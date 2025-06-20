/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: false,
  sitemapSize: 7000, // default
  changefreq: 'weekly',
  priority: 0.7,
};