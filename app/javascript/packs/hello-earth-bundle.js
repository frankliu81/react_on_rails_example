import ReactOnRails from 'react-on-rails';

import HelloEarth from '../bundles/HelloEarth/components/HelloEarth';

// This is how react_on_rails can see the HelloEarth in the browser.
ReactOnRails.register({
  HelloEarth,
});
