import { Box, Button, HStack, Image, Text, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBars, FaHouse, FaMoon } from 'react-icons/fa6';
import LeftDrawer from './LeftDrawer';
import useUser from '../lib/useUser';

export default function Header() {
  const { userLoading, user, isLoggedIn } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack justifyContent={'space-between'} py={3} px={5} borderBottomWidth={1} spacing={5}>
      <HStack spacing={5}>
        <Button size={'sm'} variant={'outline'} p={0} onClick={onOpen}>
          <FaBars />
        </Button>
        <Box>
          <Link to={'/'}>
            <HStack>
              <Image
                blockSize={'20px'}
                objectFit={'cover'}
                src="data:image/jpeg;base64,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"
              />
              <Text fontWeight={'bold'}>전력관제 시뮬레이터</Text>
            </HStack>
          </Link>
        </Box>
      </HStack>
      <HStack spacing={0}>
        {userLoading ? null : isLoggedIn ? (
          <Text px={3} fontWeight={'bold'}>
            {user?.name}
          </Text>
        ) : null}
        <Link to={'https://www.ictr.or.kr/main/'}>
          <Button size={'sm'} variant={'ghost'}>
            <FaHouse />
          </Button>
        </Link>
        <Button size={'sm'} variant={'ghost'}>
          <FaMoon />
        </Button>
      </HStack>
      <LeftDrawer isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
