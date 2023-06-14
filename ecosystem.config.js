module.exports = {
    apps: [
        {
            name: 'test deployment',
            script: 'app.js',
            out_file: '/root/.pm2/logs/test-deployment/out.log',
            error_file: '/root/.pm2/logs/test-deployment/err.log',
            env: {
                COMMON_VARIABLE: 'true',
            },
            env_uat: {
                NODE_ENV: 'uat',
            },
            env_production: {
                NODE_ENV: 'production',
            },
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        },
    ],
    deploy: {
        production: {
            user: 'root',
            host: 'subbu.com',
            ref: 'origin/main',
            repo: 'git@github.com:balutarock/project-tracking-api.git',
            path: '/root/projects/test-deployment',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production',
        },
    },
};
