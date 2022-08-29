import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Link,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
  const loginData={
    email:"",
    password:""
  }
  export const Login=()=> {
    const [token, setToken]=React.useState("")
    const [userDetails, setUserDetails]=React.useState(loginData);
    const {email, password}=userDetails;
    const navigate=useNavigate()

    React.useEffect(()=>{
        if(!!token){
            navigate("/")
        }
    },[token])

    const handleOnChange=(e)=>{
        const { name, value }=e.target
        setUserDetails((prev)=>({...userDetails, [name]:value}))
        
    }
    const handleOnclick=()=>{
        console.log(userDetails)
        // fetch(``)
        // .then(res=>res.json())
        // .then(data=>console.log(data.token))
        // .catch(err=>console.log(err))
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={email} onChange={(e)=>handleOnChange(e)}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={password} onChange={(e)=>{handleOnChange(e)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button onClick={handleOnclick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }