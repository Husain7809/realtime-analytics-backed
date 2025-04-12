function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateMockData() {
    return {
        timestamp: new Date().toISOString(),
        active_users: getRandomInt(50, 200),
        page_views: getRandomInt(100, 500),
        avg_session_duration: (Math.random() * (7.5 - 2.5) + 2.5).toFixed(2),
    };
}