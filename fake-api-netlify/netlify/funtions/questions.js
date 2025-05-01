const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
  try {
    const filePath = path.resolve(__dirname, '../../data/questions.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const questions = JSON.parse(data);

    return {
      statusCode: 200,
      body: JSON.stringify(questions),
      headers: {
        'content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error reading data',
        error: error.message,
      }),
    };
  }
};
