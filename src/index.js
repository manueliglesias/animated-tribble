/* eslint-disable no-console */
import Amplify, { ServiceWorker } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

const serviceWorker = new ServiceWorker();
serviceWorker.register();

global.handleClick1 = () => {
  console.log('Click 1');
};

global.handleClick2 = () => {
  console.log('Click 2');
};

const root = document.getElementById('root');

root.innerHTML = `
<div style="padding: 20px">
  <h1>Welcome to serviceworker-test</h1>
  <div>
    <input type="button" value="Fetch (SW)" onclick="handleClick1(event)" />
    <input type="button" value="Fetch" onclick="handleClick2(event)" />
  </div>
</div>
`;

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
