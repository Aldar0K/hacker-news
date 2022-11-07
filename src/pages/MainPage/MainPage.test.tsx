import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
