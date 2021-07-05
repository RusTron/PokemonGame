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
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: 'api/v1/pokemon/{id}',
        },
      },
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: 'api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PATCH',
        uri: {
          pathname: 'api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        uri: {
          pathname: 'api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};

export default config;
