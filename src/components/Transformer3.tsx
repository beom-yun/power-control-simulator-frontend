import { Box, Text } from '@chakra-ui/react';

export default function Transformer3() {
  return (
    <Box pos="relative" w="84px" h="84px">
      <Box
        w={12}
        h={12}
        border="2px"
        borderRadius="50%"
        pos="absolute"
        left="18px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="bold">D</Text>
      </Box>
      <Box
        w={12}
        h={12}
        border="2px"
        borderRadius="50%"
        pos="absolute"
        top={9}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="bold">D</Text>
      </Box>
      <Box
        w={12}
        h={12}
        border="2px"
        borderRadius="50%"
        pos="absolute"
        top={9}
        left={9}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontWeight="bold">Y</Text>
      </Box>
    </Box>
  );
}
