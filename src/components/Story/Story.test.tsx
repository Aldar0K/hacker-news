import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Story from './Story';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('when rendered', () => {
  it('should contain an expected title', async () => {
    render(
      <MemoryRouter>
        <Story storyId={42} index={1} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/test title/i)).toBeInTheDocument();
    screen.debug();
  });

  it('should contain an expected author field', async () => {
    render(
      <MemoryRouter>
        <Story storyId={42} index={1} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/test author/i)).toBeInTheDocument();
    screen.debug();
  });

  it('should contain an expected score field', async () => {
    render(
      <MemoryRouter>
        <Story storyId={42} index={1} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/42/i)).toBeInTheDocument();
    screen.debug();
  });

  it('should contain an expected posted field', async () => {
    render(
      <MemoryRouter>
        <Story storyId={42} index={1} />
      </MemoryRouter>
    );

    expect(await screen.findByText(/1.01.1970/i)).toBeInTheDocument();
    screen.debug();
  });
});
