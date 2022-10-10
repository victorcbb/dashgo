import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"

import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { Input } from '../../components/Form/Input'
import { error } from "console"

type CreateUserFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

type FormInputs = {
  name: string
  email: string
  password: string
  password_confirmation: string
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Insira o nome do usuário."),
  email: yup.string().required("Insira um e-mail.").email("Insira um e-mail válido."),
  password: yup.string().required("Insira uma senha.").min(6, "Insira pelo menos 6 caracteres"),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], "Senha não confere")
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<FormInputs>({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(values)
  }

  const { errors } = formState

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="name" 
                label="Nome completo"
                error={errors.name}
                {...register("name")} 
              />
              <Input 
                name="email" 
                label="E-mail" 
                type="email" 
                error={errors.email}
                {...register("email")} 
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input 
                name="password" 
                label="Senha" 
                type="password" 
                error={errors.password}
                {...register("password")} 
              />
              <Input
                name="password_confirmation"
                label="Confirmar a senha"
                type="password"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">

              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>

              <Button 
                colorScheme="pink" 
                type="submit" 
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}