import {Box, Button, ButtonGroup, Center, Container, Heading, Flex, HStack, FormControl, FormLabel, Input, FormErrorMessage, Stack, VStack, FormHelperText, calc} from '@chakra-ui/react';

import Header from '../chakra--components/Header';
export default function ZipCodeForm({handleInput, handleSearch, isError}) {

    const styles = {
        primaryDark: '#545871',
        primaryWhite: '#FDFFFC',
        secondaryLight: '#9497A7'
    }

    return (
        <Flex flexDirection={{base:'column', lg:'row'}} h={{base: '100%'}} boxShadow={{lg:'2xl'}}>
            <Header/>
            
            <Flex flexDirection={{base:'column'}} alignItems={{base:'center'}} w={{lg:'100%'}} h={{base:'100%'}}>
                
                <Center>
                    <Heading as={'h1'} size={{base:'3xl', lg:'4xl'}} noOfLines={3} textAlign={{base:'center', lg:'justify'}} w={{base:'80%',lg:'499px'}} marginTop={{base:'109px', lg:'148px'}}>
                        First let's make sure we serve your area.
                    </Heading>
                </Center>
                
                <Flex w={{base:'80%'}} alignItems={{base:'center'}} marginTop={{base:'65px'}}>
                    <FormControl isInvalid={isError}>
                        <form onSubmit={handleSearch}>
                            <Input onInput={handleInput} placeholder={'zipcode'} h={{base:'52px'}}/>
                            {isError ? <FormErrorMessage>Five digit zipcode required</FormErrorMessage> : ''}
                            <Button type='submit' marginTop={{base:'14px'}} w={{base:'100%'}} h={{base:'52px'}}>Get Started</Button>
                        </form>
                    </FormControl>
                </Flex>
            </Flex>
        </Flex>
    )
}