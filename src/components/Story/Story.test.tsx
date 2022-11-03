import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Story from './Story';
import { server } from '../../mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('when rendered', () => {
  it('should contain skeleton', () => {
    render(
      <MemoryRouter>
        <Story storyId={1} index={1} />
      </MemoryRouter>
    );

    const skeleton = screen.getByTestId(/skeleton/i);
    expect(skeleton).toBeInTheDocument();
  });
});

describe('when the data is received', () => {
  it('should contain an expected title', async () => {
    render(
      <MemoryRouter>
        <Story storyId={1} index={1} />
      </MemoryRouter>
    );

    const titleField = await screen.findByText(/test title/i);
    expect(titleField).toBeInTheDocument();
  });

  it('should contain an expected author field', async () => {
    render(
      <MemoryRouter>
        <Story storyId={1} index={1} />
      </MemoryRouter>
    );

    const authorField = await screen.findByText(/test author/i);
    expect(authorField).toBeInTheDocument();
  });

  it('should contain an expected score field', async () => {
    render(
      <MemoryRouter>
        <Story storyId={1} index={1} />
      </MemoryRouter>
    );

    const scoreField = await screen.findByText(/42/i);
    expect(scoreField).toBeInTheDocument();
  });

  it('should contain an expected posted field', async () => {
    render(
      <MemoryRouter>
        <Story storyId={1} index={1} />
      </MemoryRouter>
    );

    const postedField = await screen.findByText(/1.01.1970/i);
    expect(postedField).toBeInTheDocument();
  });
});

describe('when the data is not received', () => {
  it('should contain an error', async () => {
    render(
      <MemoryRouter>
        <Story storyId={5} index={1} />
      </MemoryRouter>
    );

    const error = await screen.findByText(/not found/i);
    expect(error).toBeInTheDocument();
  });
});

describe('when the received data is null', () => {
  it('should contain an error', async () => {
    render(
      <MemoryRouter>
        <Story storyId={6} index={1} />
      </MemoryRouter>
    );

    const error = await screen.findByText(/no matches/i);
    expect(error).toBeInTheDocument();
  });
});
