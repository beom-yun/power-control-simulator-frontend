import { Box } from '@chakra-ui/react';
import CircuitBreaker from './CircuitBreaker';
import Disconnector from './Disconnector';
import Transformer2 from './Transformer2';
import Transformer3 from './Transformer3';

export default function Substation() {
  return (
    <Box w="1440px" h="810px" border="1px">
      {/* <Box w={0} h="40px" border="1px" pos="absolute" left={379} top={2} /> */}

      <Box display="flex" justifyContent="space-around" mt="40px">
        <Disconnector />
        <Disconnector />
        <Disconnector />
      </Box>
      <Box display="flex" justifyContent="space-around" mt="10px">
        <CircuitBreaker />
        <CircuitBreaker />
        <CircuitBreaker />
      </Box>

      <Box display="flex" justifyContent="space-around" mt="50px">
        <Box display="flex" w="100%" justifyContent="space-around" ml="60px" mr="30px">
          <CircuitBreaker />
          <CircuitBreaker />
          <CircuitBreaker />
        </Box>
        <Box display="flex" w="70%" justifyContent="space-around" ml="30px" mr="60px">
          <CircuitBreaker />
          <CircuitBreaker />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-around" mt="40px">
        <Box display="flex" w="100%" justifyContent="space-around" ml="60px" mr="30px">
          <Transformer3 />
          <Transformer3 />
          <Transformer3 />
        </Box>
        <Box display="flex" w="70%" justifyContent="space-around" ml="30px" mr="60px">
          <Transformer2 />
          <Transformer2 />
        </Box>
      </Box>
    </Box>
  );
}
