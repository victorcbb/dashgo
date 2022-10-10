import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Barros</Text>
          <Text color="gray.300" fontSize="small">
            victorclovisb@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Barros" src="https:github.com/victorcbb.png" />
    </Flex>
  )
}