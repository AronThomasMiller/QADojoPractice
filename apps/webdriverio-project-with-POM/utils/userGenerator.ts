export function generateRandomUser() {
  const timestamp = Date.now();
  return {
    username: `user${timestamp}`,
    email: `user${timestamp}@example.com`,
    password: "password123",
  };
}
