import react from "@vitejs/plugin-react";
import * as fs from "fs";
import * as path from "path";
import { defineConfig } from "vite";

const defineParams = () => {
  let data = {
    USER_POOL_ID: process.env.USER_POOL_ID,
    USER_POOL_CLIENT_ID: process.env.USER_POOL_CLIENT_ID,
  };
  const parameterFilePath = path.join(__dirname, "parameters.json");
  if (fs.existsSync(parameterFilePath)) {
    const jsonStr = fs.readFileSync(parameterFilePath, "utf8");
    data = JSON.parse(jsonStr);
  }
  if (!data.USER_POOL_ID || !data.USER_POOL_CLIENT_ID) {
    throw new Error("USER_POOL_ID and USER_POOL_CLIENT_ID must be set");
  }
  return {
    __USER_POOL_ID__: JSON.stringify(data.USER_POOL_ID),
    __USER_POOL_CLIENT_ID__: JSON.stringify(data.USER_POOL_CLIENT_ID),
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: defineParams(),
});
