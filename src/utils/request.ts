import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetUrlWithParamsConfig {
  method: string;
  uri: Partial<URL>;
  body: object;
}

async function req<T>(endpoint: string, query: any): Promise<T> {
  console.log('###');
  const { method, uri, body }: IGetUrlWithParamsConfig = getUrlWithParamsConfig(endpoint, query);
  const options: IOptions = { method };
  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }
  // const uri = Url.format(uri);
  // getUrlWithParamsConfig(endpoint, query)
  const result = await fetch(Url.format(uri), options).then((res) => res.json());
  return result;
}

export default req;
