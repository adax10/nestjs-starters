import React from 'react';
import { Mjml, MjmlBody, MjmlColumn, MjmlHead, MjmlSection, MjmlStyle, MjmlAll, MjmlTitle, MjmlAttributes } from 'mjml-react';

const template = {
  colors: {
    backgroundColor: '#DEDEDE',
    foregroundColor: '#FFFFFF'
  },
  styles: {
    fontSize: {
      large: 30,
      regular: 20,
      small: 16
    }
  }
};

type EmailTemplateProps = {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (template: any) => React.ReactNode;
};

export const EmailTemplate = ({ children, title }: EmailTemplateProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>{title}</MjmlTitle>
      <MjmlAttributes>
        <MjmlAll font-family="helvetica"></MjmlAll>
      </MjmlAttributes>
      <MjmlStyle>
        {`
          .background {
            padding: 0;
            margin: 0;
            background: ${template.colors.backgroundColor}
          }
        `}
      </MjmlStyle>
    </MjmlHead>
    <MjmlBody cssClass="background" width={1000}>
      <MjmlSection padding="30px 10px">
        <MjmlColumn borderRadius="30px" padding="40px 0" backgroundColor={template.colors.foregroundColor}>
          {children(template)}
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);
