/* eslint-disable no-console */
import Amplify, { ServiceWorker } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

(async () => {
  const serviceWorker = new ServiceWorker();
  await serviceWorker.register();

  const publicKey = 'BBPa8FQja9sOkmiaddE6nemjagLuvW9TTW7s9npKz_O_gtmBhGJv-AxGzOx9-aSHwyrv-T4V6ksJ8cw7HN4Ob7U';
  const subscription = await serviceWorker.enablePush(publicKey);

  console.log(subscription);
})();

global.handleClick1 = async () => {
  const result = await fetch('static/a-file.txt');

  console.log(await result.text());
};

global.handleClick2 = async () => {
  const result = await fetch('static/another-file.txt');

  console.log(await result.text());
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
