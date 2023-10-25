import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars, FaMoon } from 'react-icons/fa6';

export default function Header() {
  return (
    <HStack justifyContent={'space-between'} py={2} px={5} borderBottomWidth={1} spacing={5}>
      <Button size={'sm'} variant={'outline'}>
        <FaBars />
      </Button>
      <Box w={'100%'}>
        <Link to={'/'}>
          <Text fontWeight={'bold'}>전력관제 시뮬레이터</Text>
        </Link>
      </Box>
      <Button size={'sm'} variant={'ghost'}>
        <FaMoon />
      </Button>
    </HStack>
  );
}
