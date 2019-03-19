/* eslint-disable */
import React from 'react';

import renderer from 'react-test-renderer';
import LoadingSpinner from '../src/components/LoadingSpinner';


it('Header is rendering correctly', () => {
  const tree = renderer
    .create(<LoadingSpinner />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
