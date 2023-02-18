import {Box, Button, Center, Container, FormControl, FormErrorMessage, FormHelperText, Heading, Flex, useRadioGroup, HStack, Stack,Text, Spinner, VStack} from '@chakra-ui/react';
import RadioCard from '../chakra--components/RadioCard';
import ResetAlert from '../chakra--components/ResetAlert';
import Header from '../chakra--components/Header';
import Footer from '../chakra--components/Footer';

export default function PetBasics({options, styling, handleChange, nextStep, prevStep, loading, location,locationData, isError, isOpen, onReset, onCancel, handleResetButton, animalSelection}) {
    const {getRootProps, getRadioProps} = useRadioGroup({
        name: 'pets',
        defaultValue: animalSelection,
        onChange: handleChange
    }),
    group = getRootProps()

    const displayOptions = (
        <Flex flexDirection={{base:'column', lg:'row'}} h={{base: 'auto', lg:'100%'}} boxShadow={{lg:'2xl'}}>
            <Header />
            <Flex flexDirection={{base:'column'}} alignItems={{base:'center'}} w={{lg:'70%'}} >
                <ResetAlert isOpen={isOpen} onReset={onReset} onCancel={onCancel}/>
                <FormControl isInvalid={isError}>
                <form onSubmit={handleChange}>
                    <Center flexDirection={'column'} mt={{base:'19px', lg:'0'}}>
                        <Heading 
                            textAlign={{base:'center', lg:'justify'}}
                            w={{base:'80%', lg:'595px'}}
                            noOfLines={{base:3}}
                            maxWidth={{lg:'1024px'}} 
                            size={{base:'xl', md:'2xl'}}
                            as={'h1'}
                            mt={{lg:'20px'}}
                            >Good news we have pets available in {location}. Tell us about your furry inquiry.
                            </Heading>
                        <Text mt={{base:'80px', lg:'19px'}} fontSize={{lg:'24px'}}>What type of pet are you looking for?</Text>
                        <Flex {...group} mt={{base:'50px', lg:''}} w={{base:'80%',lg:'95%'}} flexWrap={'wrap'} flexDirection={{base:'column', lg:'row'}} alignItems={{lg:'center'}} justifyContent={{lg:'space-evenly'}} height={{lg:'345px'}} >
                            {options.map((value) => {
                                const radio = getRadioProps({value})
                                return (
                                    <RadioCard key={value} {...radio} BG={styling.backgroundColor} textColor={styling.selectedColor}>
                                        {value}
                                    </RadioCard>
                            )
                            })}
                        </Flex>
                        { isError ? <FormErrorMessage display='inline-block'>Please select an option</FormErrorMessage> : ''}
                        {loading == true ? <Spinner /> : ''}
                        <Footer handleBackButton={handleResetButton} handleNextButton={nextStep} displayBothButtons={true}/>
                    </Center>    
                </form>
             </FormControl>
         </Flex>
        </Flex>
    ),

    displayNoOptions = (
        <Flex flexDirection={{base:'column', lg:'row'}} h={{base: 'auto', lg:'100%'}}>
            <Header />

            <Flex flexDirection={{base:'column'}} alignItems={{base:'center'}} w={{lg:'70%'}} >
                <Center flexDirection={'column'} mt={{base:'80px', lg:'100px'}}>
                    <Heading 
                        textAlign={{base:'center', lg:'justify'}}
                        w={{base:'80%', lg:'595px'}}
                        noOfLines={{base:3}}
                        maxWidth={{lg:'1024px'}} 
                        size={{base:'xl', md:'2xl'}}
                        as={'h1'}
                        mt={{lg:'20px'}}
                    >We dont have any pets available for adoption in location you selected.</Heading>
                    <Button onClick={handleResetButton} w={{base:'60%', lg:'180px'}}mt={{base:'80px', lg:'150px'}}>Try again</Button>
                    <ResetAlert isOpen={isOpen} onReset={onReset} onCancel={onCancel}/>
                </Center>
            </Flex>

        </Flex>
        )
    switch(locationData) {
        case null: 
            return (
            <Box h={{base:'100vh',lg:'100%'}} display='flex' justifyContent={'center'} alignItems={'center'}>
                <Spinner thickness='1px' size={'xl'}/>
            </Box>
            )
        case false:
            return (displayNoOptions)
        case undefined:
            return (displayNoOptions) 
        case true:
            return (displayOptions)
    }
}