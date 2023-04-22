import { Box, VStack } from '@chakra-ui/react';

export default function HighSpeedCircuitBreaker() {
  return (
    <VStack spacing={0}>
      <Box w={6} h={3} border="2px" roundedBottom="full" borderTopStyle="none" />
      <Box w={8} h={3} border="2px" roundedBottom="full" borderTopStyle="none" />
      <Box w={8} h={3} border="2px" roundedTop="full" borderBottomStyle="none" />
      <Box w={6} h={3} border="2px" roundedTop="full" borderBottomStyle="none" />
    </VStack>
  );
}
