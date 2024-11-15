import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("https://your-backend-url.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // Return the response data, e.g., a token or user information
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Re-throw the error so it can be handled by the calling code
  }
};

export { login };
