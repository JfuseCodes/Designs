import {Button, Container, Flex,Stack} from '@chakra-ui/react';

export default function FormNav({handleNext, handlePrev, buttonStyling}) {
    
    // const formNavStyling = {
    //     container: {
    //         mt: {base:'50px'},
    //         justifyContent:{base:'center'},
    //         border: {base:'2px solid red'},
    //         //  {lg:'2px solid green'},
    //     }
    // }
    return(
        <Flex mt={{base:'50px',}} border='2px solid red' justifyContent={'center'}>
        {/* // <Flex style={formNavStyling.container}> */}
                    <Stack direction={{base:'column',lg:'row'}} border='2px solid green' w={{base:'80%'}}>
                    <Button h={{base:'52px'}} 
                            mb={{base:'21px', lg:0}} 
                            onClick={handlePrev}>Previous</Button>
                    <Button h={{base:'52px'}} 
                            bg={buttonStyling.primaryDark}
                            _hover={{bg: buttonStyling.primaryDarkHover}}
                            color={'whiteAlpha.900'}
                            onClick={handleNext}>Next</Button>
                </Stack>
        </Flex>
        )
}