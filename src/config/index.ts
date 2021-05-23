interface ConfigTypes {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [key: string]: GetPokemons;
    };
  };
}

export interface GetPokemons {
  method: string;
  uri: UriType;
}

interface UriType {
  pathname: string;
}

const config: ConfigTypes = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
