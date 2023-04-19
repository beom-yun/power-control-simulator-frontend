import { Box } from '@chakra-ui/react';

export default function CircuitBreaker() {
  return (
    <Box
      w={8}
      h={12}
      border="2px"
      borderRadius="10%"
      display="flex"
      flexDir="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box w={3} h={3} border="2px" borderRadius="50%" />
      <Box w={3} h={3} border="2px" borderRadius="50%" />
    </Box>
  );
}
