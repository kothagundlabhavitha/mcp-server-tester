const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/test', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.post(url, {
      input: "Test message from MCP Server Tester"
    });

    return res.json({ success: true, response: response.data });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
      error: error.response?.data || {}
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
