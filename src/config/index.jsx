import configQa from 'config/config-qa.json';
import configApi from 'config/config-api.json';

export default process.env.NODE_ENV !== 'development' ? configQa : configApi