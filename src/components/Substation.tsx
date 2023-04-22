import { Box, HStack, Spacer, Stack, VStack } from '@chakra-ui/react';
import CircuitBreaker from './CircuitBreaker';
import Disconnector from './Disconnector';
import Transformer2 from './Transformer2';
import Transformer3 from './Transformer3';
import HighSpeedCircuitBreaker from './HighSpeedCircuitBreaker';
import Rectifier from './Rectifier';

export default function Substation() {
  return (
    <VStack w="1440px" h="810px" border="1px">
      <HStack w="100%" justifyContent="space-around" pt="40px">
        <Disconnector />
        <Disconnector />
        <Disconnector />
      </HStack>
      <HStack w="100%" justifyContent="space-around" pt="0px">
        <CircuitBreaker />
        <CircuitBreaker />
        <CircuitBreaker />
      </HStack>

      <HStack w="100%" justifyContent="space-around" pt="30px">
        <HStack w="100%" justifyContent="space-around" pl="60px" pr="30px">
          <CircuitBreaker />
          <CircuitBreaker />
          <CircuitBreaker />
        </HStack>
        <HStack w="70%" justifyContent="space-around" pl="30px" pr="60px">
          <CircuitBreaker />
          <CircuitBreaker />
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="space-around" pt="30px">
        <HStack w="100%" justifyContent="space-around" pl="60px" pr="30px">
          <Transformer3 />
          <Transformer3 />
          <Transformer3 />
        </HStack>
        <HStack w="70%" justifyContent="space-around" pl="30px" pr="60px">
          <Transformer2 />
          <Transformer2 />
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="space-around" pt="30px">
        <HStack w="100%" justifyContent="space-around" pl="60px" pr="30px">
          <Rectifier />
          <Rectifier />
          <Rectifier />
        </HStack>
        <HStack w="70%" justifyContent="space-around" pl="30px" pr="60px">
          <CircuitBreaker />
          <CircuitBreaker />
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="space-around" pt="30px">
        <HStack w="100%" justifyContent="space-around" pl="60px" pr="30px">
          <HighSpeedCircuitBreaker />
          <HighSpeedCircuitBreaker />
          <HighSpeedCircuitBreaker />
        </HStack>
        <HStack w="70%" justifyContent="space-around" pl="30px" pr="60px">
          <CircuitBreaker />
        </HStack>
      </HStack>

      <HStack w="100%" justifyContent="space-around" pt="30px">
        <HStack w="100%" justifyContent="space-around" pl="120px" pr="120px">
          <HighSpeedCircuitBreaker />
          <HighSpeedCircuitBreaker />
          <HighSpeedCircuitBreaker />
          <HighSpeedCircuitBreaker />
          <HighSpeedCircuitBreaker />
        </HStack>
        <HStack w="70%" justifyContent="space-around" pl="30px" pr="60px">
          <CircuitBreaker />
          <CircuitBreaker />
          <CircuitBreaker />
        </HStack>
      </HStack>
    </VStack>
  );
}
