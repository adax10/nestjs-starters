import React from 'react';
import { MjmlText } from 'mjml-react';
import { EmailTemplate } from './email-template';

export const exampleEmail = () => (
  <EmailTemplate title="Example email">
    {template => (
      <React.Fragment>
        <MjmlText
          align="center"
          fontWeight={400}
          lineHeight="36px"
          color={template.colors.black}
          fontSize={template.styles.fontSize.large}
        >
          Hello world!
        </MjmlText>
      </React.Fragment>
    )}
  </EmailTemplate>
);
