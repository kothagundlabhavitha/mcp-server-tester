MCP Server Tester
🚀 A web application that allows users to test the connectivity and functionality of an MCP server by providing its URL or installation code.
🔹 Features
✅ Accepts an MCP server URL or installation code
✅ Verifies connectivity and fetches response
✅ Displays results clearly
✅ Handles errors gracefully
✅ Deployed on Netlify (Frontend) and Render (Backend)
🔹 Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Hosting: Netlify (Frontend), Render (Backend)

📌 Live Demo & Repository
🔗 Live App: creative-torte-69268c.netlify.app
🔗 GitHub Repository: https://github.com/kothagundlabhavitha/mcp-server-tester
🚀 How to Run the Project Locally
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/mcp-server-tester.git
cd mcp-server-tester
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start the Backend
bash
Copy
Edit
node server.js
The backend will start on http://localhost:3000

4️⃣ Open the Frontend
Open index.html in a browser

Or use Live Server extension in VS Code

📌 How It Works
1️⃣ Enter a valid MCP Server URL (e.g., from Smithery)
2️⃣ Click "Test MCP Server"
3️⃣ The app sends a request to the backend (Node.js on Render)
4️⃣ The backend checks the MCP server and returns the response
5️⃣ The result is displayed on the webpage
⚠️ Troubleshooting
If you see "Cannot GET /", ensure the backend has a / route:

js
Copy
Edit
app.get("/", (req, res) => res.send("MCP Server Tester Backend is running!"));
If the frontend shows "Unexpected token '<'", your backend might be down. Check the Render logs for errors.

If "Failed to fetch", ensure the backend URL is correct in script.js:

js
Copy
Edit
const backendUrl = "https://mcp-server-tester-e4xf.onrender.com";
📌 Deployment Details
Frontend:
✅ Netlify → creative-torte-69268c.netlify.app

Hosted using Netlify for quick, free deployments

Backend:
✅ Render → https://mcp-server-tester-e4xf.onrender.com

Hosted on Render for a free, always-online backend
🛠 Future Improvements
🔹 Better error handling
🔹 More test cases for different MCP servers
🔹 Improved UI/UX

👨‍💻 Author
Bhavitha Kothagundla
