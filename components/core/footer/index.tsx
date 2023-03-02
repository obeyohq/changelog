import { Box, Container, ContainerProps, Image } from "@chakra-ui/react";
import { defaultPx } from "lib/utils/default-container-px";

interface Props {
  _wrapper?: ContainerProps;
}

export default function Footer(props: Props) {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <Box flexShrink={0}>
        <Image src="/obeyo-logo.svg" alt="Obeyo" width={68} />
      </Box>
    </Container>
  );
}
