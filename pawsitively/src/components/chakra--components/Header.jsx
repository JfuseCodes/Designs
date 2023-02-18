import {Center, Container, Heading, Flex, List, ListItem, ListIcon, Box, Image, HStack, Stack, Icon, Spacer, Text} from '@chakra-ui/react';
import { VscCircleFilled } from 'react-icons/vsc';
import goldenRetriever from '../../assets/golden-retriever.png';
import pawsitivelyIcon from '../../assets/icon--pawsitively.png';

export default function Header({zipCodeSearched}) {

    const headerStyling = {
        backgroundColor : '#545871',
        listColor: '#9487A7',
        headingColor: '#FDFFFC',
    }

    return (
    // <Box bg={headerStyling.backgroundColor} w={{lg:'30%'}} h={{lg: '100vh'}} border='2px solid red'> 

    // {/* // <Box bg={headerStyling.backgroundColor} h={{lg:'100%'}} w={{lg:'30%'}}>  */}
    //     {/* <Box height={{base:'100px'}} position={{lg:'fixed'}} top={{lg:'0'}}> */}
    //     <Box>

    //             <Center w={{lg:'300px'}}>
    //                 <HStack>
    //                     <Image src={pawsitivelyIcon}/>
    //                     <Heading color={headerStyling.headingColor}>pawsitively</Heading>
    //                 </HStack>
    //             </Center>
    //     </Box>
    //         {/* <Flex bg={{lg:headerStyling.backgroundColor}} justifyContent={{base:'center', }} minHeight={{lg:'776px'}} height={{lg:'100%'}}> */}
    //         {/* <Flex bg={{lg:headerStyling.backgroundColor}} justifyContent={{base:'center', }} alignItems={{lg:'center'}} minHeight={{lg:'100vh'}} height={{lg:'100%'}}> */}
    //         <Flex>

    //                     <Flex 
    //             width={{base:'100%',}} 
    //             minHeight={{lg:'100vh'}}
    //             alignItems={{base:'center'}}
    //             justifyContent={{base:'space-evenly', lg:'center'}}>  
    //                 <Flex>

    //                     <List color={headerStyling.listColor} spacing={{lg:'10'}} fontSize={{lg:'24px'}}>
    //                         <ListItem>
    //                             <ListIcon as={VscCircleFilled}/>
    //                                     Background 
    //                         </ListItem>

    //                         <ListItem>
    //                             <ListIcon as={VscCircleFilled}/>
    //                             Personalized
    //                         </ListItem>

    //                         <ListItem>
    //                             <ListIcon as={VscCircleFilled}/>
    //                             Community
    //                         </ListItem>

    //                         <ListItem>
    //                             <ListIcon as={VscCircleFilled}/>
    //                             Time saving
    //                         </ListItem>
                            
    //                     </List>
    //                 </Flex>
                        
          
    //             <Center w={{lg:'100%'}} position={{lg:'absolute'}} bottom={{lg:'0'}}>
    //                 <Image width={{base:'100px', lg:'260px'}} src={goldenRetriever}/>
    //             </Center>

    //         </Flex>
    //     </Flex>
    // </Box>
    <Box bg={headerStyling.backgroundColor} minW={{lg: '30%'}}>
        
        <Box marginTop={{lg:'20px'}}>
            <Center>
                <HStack>
                    <Image src={pawsitivelyIcon}/>
                    <Heading color={headerStyling.headingColor}>pawsitively</Heading>
                </HStack>
            </Center>
        </Box>

        <Flex justifyContent={{base:'center'}} alignItems={{lg:'center'}} h={{lg:'704px'}}>
                <Flex w={{sm:'50%', lg:'auto'}} flexDirection={{lg:'column'}} justifyContent={{sm:'space-between'}} h={{lg:'100%'}}>
                <Center w={{sm:'50%', lg:'auto'}} marginTop={{lg:'100px'}}>
                    <List color={headerStyling.listColor} spacing={{lg:'10'}} fontSize={{base:'70%',md:'1rem',lg:'24px'}}>
                        <ListItem>
                                <ListIcon as={VscCircleFilled}/>
                                    Background 
                        </ListItem>

                        <ListItem>
                            <ListIcon as={VscCircleFilled}/>
                                    Personalized
                            </ListItem>

                        <ListItem>
                                <ListIcon as={VscCircleFilled}/>
                                    Community
                        </ListItem>

                        <ListItem>
                            <ListIcon as={VscCircleFilled}/>
                                Time saving
                        </ListItem>
                    </List>
                </Center>

                <Center>
                    <Box>
                        <Image src={goldenRetriever}/>
                    </Box>
                </Center>
            </Flex>
        </Flex>
    </Box>
    )
}
