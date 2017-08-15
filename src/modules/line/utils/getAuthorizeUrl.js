/* eslint-disable camelcase */
import { stringify } from 'query-string';
import R from 'ramda';

export const BASE_LINE_API_URL = 'https://notify-bot.line.me/oauth/authorize';

const getAuthorizeUrl = R.compose(
  queryString => `${BASE_LINE_API_URL}?${queryString}`,
  stringify,
  ({ LINE_API_CLIENT_ID, BASE_SERVER_URL }) => ({
    response_type: 'code',
    client_id: LINE_API_CLIENT_ID,
    redirect_uri: `${BASE_SERVER_URL}/authorized`,
    scope: 'notify',
    state: 'state',
  }),
);

export default getAuthorizeUrl;
