import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { Label } from '.';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

// decorators should only be added once
// best place is in config.js

addDecorator(withA11y);
addDecorator(withKnobs);

storiesOf('Label', module)
  .add('informational', () => (
    <Label text={text('text', 'Under Evaluation')} level="information" />
  ))
  .add('requires action', () => (
    <Label text={text('text', 'More Homework Requested')} level="warning" />
  ));
