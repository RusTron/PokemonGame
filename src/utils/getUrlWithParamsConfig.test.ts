import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('1 Should get two arguments and return', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });
  test('2 Should get two arguments and return', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });
  test('3 Should get two arguments and return', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: 'api/v1/pokemon/create',
        query: {},
      },
      body: {
        name: 'Pikachu',
      },
    });
  });
});
