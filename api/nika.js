export default function handler(req, res) {
  const { query } = req.body || {}

  let result = "Nika is online 🚀"

  if (query === "search") result = "Searching Web3 data..."
  if (query === "analyze") result = "Analyzing DeFi trends..."
  if (query === "generate") result = "Generating insights..."
  if (query === "answer") result = "Answering your question..."

  res.status(200).json({
    success: true,
    agent: "Nika",
    result
  })
}