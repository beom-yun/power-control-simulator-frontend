import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, HStack } from '@chakra-ui/react';

export default function Rectifier() {
  return (
    <HStack spacing={0} pos="relative">
      <Box w="21px" h="48px" border="2px" borderRightWidth="1px" borderBottomStyle="none" />
      <Box w="21px" h="48px" border="1px" borderBottomWidth="2px" borderTopStyle="none" />
      <Box w="21px" h="48px" border="2px" borderLeftWidth="1px" borderBottomStyle="none" />
      <TriangleUpIcon fontSize={'lg'} pos="absolute" left="-8px" />
      <TriangleDownIcon fontSize={'lg'} pos="absolute" left="12px" />
      <TriangleUpIcon fontSize={'lg'} pos="absolute" left="33px" />
      <TriangleDownIcon fontSize={'lg'} pos="absolute" left="53px" />
      <Box w="14px" h={0} border="1px" pos="absolute" top="19px" left="-6px" />
      <Box w="14px" h={0} border="1px" pos="absolute" top="27px" left="14px" />
      <Box w="14px" h={0} border="1px" pos="absolute" top="19px" left="35px" />
      <Box w="14px" h={0} border="1px" pos="absolute" top="27px" left="55px" />
    </HStack>
  );
}
