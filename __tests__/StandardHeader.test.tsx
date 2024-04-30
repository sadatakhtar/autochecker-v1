import 'react-native';
import React from 'react';
import StandardHeader from '../components/StandardHeader';

// Note: import explicitly to use the types shipped with jest.
import {it, describe, test} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('StandardHeader component', () => {
  test('Should render header without error', () => {
    renderer.create(<StandardHeader />);
  });
});
