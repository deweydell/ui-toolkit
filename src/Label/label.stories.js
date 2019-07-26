import React from 'react';
import { Label } from '.';
import { storiesOf, addDecorator } from '@storybook/react';

import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, select } from '@storybook/addon-knobs';

// decorators should only be added once
// best place is in config.js

addDecorator(withInfo);
addDecorator(withA11y);
addDecorator(withKnobs);

storiesOf('Label', module)
  .add(
    'informational',
    () => (
      <Label
        text={text('text', 'Under Evaluation')}
        level={select(
          'level',
          ['information', 'success', 'warning'],
          'information'
        )}
      />
    ),
    { info: { source: true } }
  )
  .add('requires action', () => (
    <Label text={text('text', 'More Homework Requested')} level="warning" />
  ));
