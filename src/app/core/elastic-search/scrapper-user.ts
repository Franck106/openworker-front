export interface ScrapperUser {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: {
    city: string;
    '@timestamp': string;
    headers: {
      request_path: string;
      connection: string;
      http_host: string;
      content_length: string;
      http_user_agent: string;
      http_version: string;
      content_type: string;
      request_method: string;
      accept_encoding: string;
      http_accept: string;
    };
    host: string;
    price: number;
    '@version': string;
    skills: string[];
  };
}
