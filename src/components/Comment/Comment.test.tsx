import React from 'react';
import { render, screen } from '@testing-library/react';

import Comment from './Comment';
import { server } from '../../mocks/server';
import userEvent from '@testing-library/user-event';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('when rendered', () => {
  it('should contain an expected title', async () => {
    render(<Comment commentId={2} />);

    const authorField = await screen.findByText(/test author/i);

    expect(authorField).toBeInTheDocument();
  });

  it('should contain an expected text', async () => {
    render(<Comment commentId={2} />);

    const textField = await screen.findByText(/test text/i);

    expect(textField).toBeInTheDocument();
  });
});

describe("when rendered and the comment's kids field is not empty", () => {
  it('should contain info about the number of replies', async () => {
    render(<Comment commentId={3} />);

    const answerField = await screen.findByText(/1 answer\(s\)/i);

    expect(answerField).toBeInTheDocument();
  });

  it('should contain a button to display answers', async () => {
    render(<Comment commentId={3} />);

    const showButton = await screen.findByText(/show/i);

    expect(showButton).toBeInTheDocument();
  });
});

describe('when the data is not received', () => {
  it('should contain an error', async () => {
    render(<Comment commentId={5} />);

    const error = await screen.findByText(/not found/i);
    expect(error).toBeInTheDocument();
  });
});

describe('when the received data is null', () => {
  it('should contain an error', async () => {
    render(<Comment commentId={6} />);

    const error = await screen.findByText(/no matches/i);
    expect(error).toBeInTheDocument();
  });
});

describe('when show button is clicked', () => {
  it('should render kids comments', async () => {
    render(<Comment commentId={3} />);

    const showButton = await screen.findByText(/show/i);
    userEvent.click(showButton);

    const authorField = await screen.findByText(/test kid author/i);
    const textField = await screen.findByText(/test kid text/i);

    expect(authorField).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
  });
});
