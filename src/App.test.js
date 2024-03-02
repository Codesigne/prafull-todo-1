import { render, screen } from '@testing-library/react';
import App from './App';


// import { TextEncoder, TextDecoder } from 'util';

// Object.assign(global, { TextDecoder, TextEncoder });

import { TextDecoder } from 'node:util'
import { log } from 'node:console';

global.TextDecoder = TextDecoder


console.log("TextDecoder :", TextDecoder);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Include Completed/i);
  expect(linkElement).toBeInTheDocument();
});
