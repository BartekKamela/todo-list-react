import { Wrapper, Header, HeaderTitle, Content } from "./styled";

const Section = ({ title, content, extraHeaderContent }) => (
    <Wrapper>
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
          {extraHeaderContent}
        </Header>
        <Content>
          {content}
        </Content>
      </Wrapper>
);

export default Section;