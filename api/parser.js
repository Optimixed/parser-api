const Mercury = require('@postlight/mercury-parser');
module.exports = async (req, res) => {
  const { url } = req.query;
  if (!url) {
    res.status(400).json({ error: 'Missing url parameter' });
    return;
  }
  try {
    const result = await Mercury.parse(url, { contentType: 'html' });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
