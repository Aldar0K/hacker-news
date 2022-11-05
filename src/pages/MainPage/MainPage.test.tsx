import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { Provider } from 'react-redux';

import MainPage from './MainPage';
import { server } from '../../mocks/server';
import { store } from 'store';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('when rendered', () => {
  it('should contain header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const title = screen.getByText(/latest stories/i);
    expect(title).toBeInTheDocument();
  });

  it('should contain refresh button', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const refreshButton = screen.getByText(/refresh/i);
    expect(refreshButton).toBeInTheDocument();
  });
});

describe('when the data is received', () => {
  it('should render stories', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const storyTitle = await screen.findByText(/test title/i);
    expect(storyTitle).toBeInTheDocument();

    const storyAuthor = await screen.findByText(/42/i);
    expect(storyAuthor).toBeInTheDocument();

    const storyScore = await screen.findByText(/test author/i);
    expect(storyScore).toBeInTheDocument();
  });
});

// describe('when the data is not received', () => {
//   it('should contain an error', async () => {
//     server.use(
//       rest.get('https://hacker-news.firebaseio.com/v0/newstories.json', (req, res, ctx) => {
//         return res(ctx.status(401), ctx.json({ error: 'Permission denied' }));
//       })
//     );

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <MainPage />
//         </MemoryRouter>
//       </Provider>
//     );

//     const error = await screen.findByText(/fetching problems.../i);
//     expect(error).toBeInTheDocument();

//     screen.debug();
//   });
// });
