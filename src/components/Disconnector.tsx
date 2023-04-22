import { Box } from '@chakra-ui/react';

export default function Disconnector() {
  return (
    <Box
      w={8}
      h={12}
      border="none"
      borderRadius="10%"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      pos="relative"
    >
      <Box w={3} h={3} border="2px" borderRadius="50%" />
      <Box w={0} h={9} border="1px" pos="absolute" />
      <Box w={3} h={3} border="2px" borderRadius="50%" />
    </Box>
  );
}
