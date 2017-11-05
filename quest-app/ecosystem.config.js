module.exports = {
  apps: [{
    name: 'quest',
    script: './quest-server/build/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-58-120-77.us-east-2.compute.amazonaws.com',
      key: '~/Downloads/quest.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rbrandonc/quest.git',
      path: '/home/ubuntu/quest',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
