import { Flex, Stack, Button } from "@chakra-ui/react"
export default function Footer({handleBackButton=null, handleNextButton=null, displayBothButtons=null}) {

    switch(displayBothButtons) {
        case false: 
            return (
                <Flex justifyContent={'center'} mt={{base:'86px',lg:'80px'}}>
                    <Button w={{base:'80%', lg:'184px'}} onClick={handleBackButton}>Back</Button>
                </Flex>
            )
        case true:
            return (
            <Stack display='flex' justifyContent={'space-between'} mt={{base:'86px',lg:'80px'}} spacing='8' w={{base:'80%'}} direction={{base:'column', lg:'row'}}>
                <Button w={{lg:'184px'}} onClick={handleBackButton}>Back</Button>
                <Button w={{lg:'184px'}} bg={'#686e8f'} _hover={{bg: '#474b60'}} textColor={'#FDFFFC'} onClick={handleNextButton}>Next</Button>
            </Stack>
            )
    }
} 