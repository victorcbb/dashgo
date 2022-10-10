import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px={["2", "6"]}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                cursor="pointer"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th p={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Barros</Text>
                    <Text fontSize="sm" color="gray.300">
                      victorclovisb@hotmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>03 de outubro, 2022</Td> }
                <Td>
                <Button
                    as="a"
                    px={["2", "2", "2", "3"]}
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={isWideVersion && <Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    { isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize="16" /> }
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Barros</Text>
                    <Text fontSize="sm" color="gray.300">
                      victorclovisb@hotmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>03 de outubro, 2022</Td> }
                <Td>
                <Button
                    as="a"
                    px={["2", "2", "2", "3"]}
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={isWideVersion && <Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    { isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize="16" /> }
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td p={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Barros</Text>
                    <Text fontSize="sm" color="gray.300">
                      victorclovisb@hotmail.com
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>03 de outubro, 2022</Td> }
                <Td>
                  <Button
                    as="a"
                    px={["2", "2", "2", "3"]}
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={isWideVersion && <Icon as={RiPencilLine} fontSize="16" />}
                    cursor="pointer"
                  >
                    { isWideVersion ? 'Editar' : <Icon as={RiPencilLine} fontSize="16" /> }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}