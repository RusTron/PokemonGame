import config from '../config';

interface IApiconfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEdnpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

function getUrlWithParamsConfig(endpointConfig: string, params: any) {
  const { method, uri }: IEdnpoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];
  let body = {};

  const apiConfigUri: IApiconfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };
  // const url = {
  //   ...config.client.server,
  //   ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  //   query
  // };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result;
    }

    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;
  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWithParamsConfig;
