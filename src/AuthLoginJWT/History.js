/*The history is a custom history object used by the React Router, 
the reason I used a custom history object instead of the one built into React Router is,
to enable redirecting users from outside React components, for example in the logout method of the App component. */  

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();