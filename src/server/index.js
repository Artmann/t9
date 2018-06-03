const express = require('express');
const app = express();

const SuggestionService = require ('./services/Suggestion');
const suggestionService = new SuggestionService();

app.get('/api/suggestions/:numbers', (request, response) => {
  const numbers = `${request.params.numbers}`;
  response.send(suggestionService.suggest(numbers));
});

app.use(express.static(`${__dirname}/../../public/`));

app.listen(3000);