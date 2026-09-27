import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 5,
    duration: '10s',

    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.10'],
        checks: ['rate>0.90'],
    },
};

const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

export default function () {

    const response = http.post(
        `${BASE_URL}/web/index.php/auth/validate`,
        {
            username: 'Admin',
            password: 'admin123',
        }
    );

    check(response, {
        'Login request completed': (res) =>
            res.status === 200 || res.status === 302,
    });
}