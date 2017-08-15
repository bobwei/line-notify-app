import { createStructuredSelector } from 'reselect';
import R from 'ramda';

import getEnv from 'modules/env/selectors/getEnv';
import getAuthorizeUrl from 'modules/line/utils/getAuthorizeUrl';

const mapStateToProps = createStructuredSelector({
  authorizeUrl: R.compose(getAuthorizeUrl, getEnv),
});

export default mapStateToProps;
