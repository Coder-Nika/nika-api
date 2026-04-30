export default async function handler(req, res) {
  const { query, input } = req.body || {}

  let result = "Nika is online 🚀"

  try {
    if (query === "search") {
      result = `Searching Web3 info for: ${input}`
    }

    if (query === "analyze") {
      result = `Analyzing market trends for: ${input}`
    }

    if (query === "generate") {
      result = `Generating insights about: ${input}`
    }

    if (query === "answer") {
      result = `Answering: ${input}`
    }

  } catch (err) {
    result = "Error processing request"
  }

  res.status(200).json({
    success: true,
    agent: "Nika",
    result
  })
}