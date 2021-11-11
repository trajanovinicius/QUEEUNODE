// Criando Filas
import redisConfig from "../../config/redis";
import Queue from "bull";

import * as jobs from "../jobs";

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((queue) => queue.name === name);

    console.log(queue);

    return queue.bull.add(data);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      // processo para acompanhar falhas nos jobs:
      queue.bull.on("failed", (job, err) => {
        console.log("job failed", queue.key, job.data);
        console.log(err);
      });
    });
  },
};
