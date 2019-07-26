import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Label } from '.';
import { withA11y } from '@storybook/addon-a11y';

// should only be added once
// best place is in config.js
addDecorator(withA11y);
storiesOf('Label', module)
  .add('informational', () => (
    <Label text="Under Evaluation" level="information" />
  ))
  .add('requires action', () => (
    <Label text="Under Evaluation" level="warning" />
  ));
