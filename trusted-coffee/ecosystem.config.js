module.exports = {
  apps: [
    {
      name: 'trusted-coffee',
      script: 'server.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 80,
      },
    },
  ],
};
