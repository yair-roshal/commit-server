module.exports = {
  apps: [
    {
      name: "commit_server",
      script: "./server.js",
      max_memory_restart: "300M",
      // Logging
      out_file: "./commit_server_out.log",
      error_file: "./commit_server_error.log",
      time: true,

      logDateFormat: "HH:mm:ss",

      watch: true,

      ignore_watch: [
        "./node_modules",
        "./.DS_Store",
        "./package.json",
        "./yarn.lock",
        "*.log",
        "*.txt",
      ],

      // Env Specific Config
      env_prod: {
        NODE_ENV: "prod",
        exec_mode: "cluster",
        instances: "max",
      },
      env_dev: {
        NODE_ENV: "dev",
        exec_mode: "cluster",
        instances: "max",
      },
    },
  ],
};
