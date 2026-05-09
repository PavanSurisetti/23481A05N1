const axios = require("axios");
const Log = require("../middleware/logger");
const API_URL = "http://4.224.186.213/evaluation-service/notifications";
const knapsack = (items, capacity) => {
    const n = items.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (items[i - 1].hours <= w) {
                dp[i][w] = Math.max(
                    items[i - 1].importance + dp[i - 1][w - items[i - 1].hours],
                    dp[i - 1][w]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][capacity];
};
const run = async () => {
    try {
        await Log("backend", "info", "service", "Fetching vehicle data");
        const response = await axios.get(API_URL);
        const vehicles = response.data.vehicles;
        const capacity = response.data.capacity;
        await Log("backend", "info", "service", "Data fetched");
        const result = knapsack(vehicles, capacity);
        await Log("backend", "info", "service", "Knapsack calculated");
        console.log("Max Importance:", result);
    } catch (error) {
        await Log("backend", "error", "handler", error.message);
    }
};
run();