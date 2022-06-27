import axios from 'axios';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Users } from './Users';

import { renderTestApp } from '../tests/helpers/renderTestApp';

jest.mock('axios');

describe('users component', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('fetch users', async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });

  test('redirect to user page', async () => {
    axios.get.mockReturnValue(response);
    renderTestApp(<Users />);
    const users = await screen.findAllByTestId('user-item');
    userEvent.click(users[0]);
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
