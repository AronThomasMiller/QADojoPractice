import path from "path";

const AUTH_DIR = path.resolve(__dirname, "../.auth");

export const AUTH_PATHS = {
  DIR: AUTH_DIR,
  STATE: path.join(AUTH_DIR, "storage-state.json"),
  USER: path.join(AUTH_DIR, "user.json"),
};
