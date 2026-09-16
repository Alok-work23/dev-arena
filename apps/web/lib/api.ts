const API_URL = "http://localhost:4000";

export async function getHealth() {
  const response = await fetch(`${API_URL}/api/health`);

  if (!response.ok) {
    throw new Error("Failed to connect to DevArena API");
  }

  return response.json();
}