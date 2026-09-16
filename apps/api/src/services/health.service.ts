export function getHealthStatus() {
  return {
    success: true,
    message: "DevArena API is running",
    timestamp: new Date().toISOString(),
  };
}

