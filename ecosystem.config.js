module.exports = {
  apps: [
    {
      name: "weddingBE",
      script: "./start.js", // Path to your entry file
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
