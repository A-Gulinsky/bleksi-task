
import Image from 'next/image';
import { Container, P } from './HomePage.styled';

export const HomePage = () => {

  return (
    <Container>
      <Image
        src={'bleksi.svg'}
        alt="whatsapp link"
        width={500}
        height={500}
        quality={100}
        priority
      />
      <P>TASK</P>
    </Container>
  );
}