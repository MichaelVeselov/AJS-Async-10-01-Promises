import GameSavingLoader from '../gameSavingLoader.js';

test('method load from class GameSavingLoader should return data in correct format', () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  return GameSavingLoader.load().then((result) =>
    expect(result).toEqual(expected)
  );
});
