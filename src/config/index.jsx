import configQa from 'config/config-qa.json';
import configProd from 'config/config-prod.json';

export default process.env.NODE_ENV !== 'development' ? configQa : configProd