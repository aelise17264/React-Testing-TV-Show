
import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import {fetchShow as mockFetchMissions} from './api/fetchShow';
import Episodes from './Episodes';


const showData = [
      {
            "short_name": "React App",
            "name": "Create React App Sample",
            "icons": [
              {
                "src": "favicon.ico",
                "sizes": "64x64 32x32 24x24 16x16",
                "type": "image/x-icon"
              },
              {
                "src": "logo192.png",
                "type": "image/png",
                "sizes": "192x192"
              },
              {
                "src": "logo512.png",
                "type": "image/png",
                "sizes": "512x512"
              }
            ],
            "start_url": ".",
            "display": "standalone",
            "theme_color": "#000000",
            "background_color": "#ffffff"
          }
    ]


test('render without errors', () => {
    render(<Episodes episodes={[]}/>);
})

test('Renders with new props', () => {
    const {rerender} = render(<Episodes episodes={[]}/>);

    rerender(<Episodes episodes={showData}/>);

    const episodes = screen.getAllByTestId(/episode/i)
})