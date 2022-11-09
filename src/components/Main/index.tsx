import { Wrapper, Logo, Title, Description } from './styles';

const Main = ({ title = 'Instituto Mancalaa', description = 'Instituto Mancalaa' }) => (
  <Wrapper>
    <Logo src="/img/nextjs.png" alt="Next.js" />

    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

export default Main;
