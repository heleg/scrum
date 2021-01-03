import * as React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import App from './src/components/App';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

render(<App history={history} />, document.getElementById('root'));
