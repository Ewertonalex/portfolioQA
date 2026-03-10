import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 20,
  duration: "30s",
  thresholds: {
    http_req_failed: ["rate<0.01"], // menos de 1% de erros
    http_req_duration: ["p(95)<800"], // 95% das requisições abaixo de 800ms
  },
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function () {
  const res = http.get(`${BASE_URL}/posts`);

  check(res, {
    "status é 200": (r) => r.status === 200,
    "latência aceitável": (r) => r.timings.duration < 800,
  });

  sleep(1);
}

