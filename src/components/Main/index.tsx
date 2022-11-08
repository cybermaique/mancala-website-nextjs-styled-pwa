import { Wrapper, Logo, Title, Description } from './styles';

const Main = ({
  title = 'Instituto Mancala',
  description = 'Instituto Mancala'
}) => (
  <Wrapper>
    <Logo src="/img/nextjs.png" alt="Next.js" />

    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default Main;
