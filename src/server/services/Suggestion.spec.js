const SuggestionService = require('./Suggestion');
const suggestionService = new SuggestionService();

describe('SuggestionService', () => {
  it('handles empty input', () => {
    expect(suggestionService.suggest(null))
      .toEqual([]);

    expect(suggestionService.suggest(undefined))
      .toEqual([]);

    expect(suggestionService.suggest([]))
      .toEqual([]);

    expect(suggestionService.suggest())
      .toEqual([]);
  });

  it('returns words corresponding to input', () => {
    expect(suggestionService.suggest('8378464'))
      .toEqual(['testing', 'vesting', 'vestini']);
    
    expect(suggestionService.suggest('4663'))
      .toEqual([
        "gome",
        "gond",
        "gone",
        "good",
        "goof",
        "home",
        "hond",
        "hone",
        "hood",
        "hoof",
        "inne",
        "ione"
      ]);
    
    expect(suggestionService.suggest('2'))
      .toEqual(['a', 'b', 'c']);
  });
});