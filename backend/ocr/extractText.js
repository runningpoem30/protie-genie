const Tesseract = require('tesseract.js');
exports.extractText = async (imagePath) => {
  const { data: { text } } = await Tesseract.recognize(imagePath, 'eng');
  return text;
};