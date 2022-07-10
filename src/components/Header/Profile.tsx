import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Gus Prado</Text>
        <Text color='gray.50' fontSize='small'>
          gusgprado@gmail.com
        </Text>
      </Box>

      <Avatar size='md' src='https://github.com/gusprado.png' />
    </Flex>
  );
}
