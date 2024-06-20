// next-sitemap.config.js
require('ts-node').register({
    transpileOnly: true,
    compilerOptions: {
      module: 'commonjs'
    }
  });
  const { getAllPosts } = require('./src/lib/api');
  
  
  module.exports = {
    siteUrl: 'https://devwize.com',
    generateRobotsTxt: true,
    outDir: 'public',
    transform: async (_, path) => {
      if (path === '/') {
        return {
          loc: path,
          changefreq: 'daily',
          priority: 1.0,
        };
      }
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
      };
    },
    additionalPaths: async () => {
      const posts = getAllPosts();
      return posts.map((post) => ({
        loc: `/posts/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      }));
    },
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin/' },
      ],
    },
  };
  