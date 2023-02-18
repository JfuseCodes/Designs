import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Heading,Link, Text, ButtonGroup, Button, Stack } from '@chakra-ui/react'
import { VscLinkExternal } from 'react-icons/vsc'
// import placeholderImage from '../../assets/'
// import placeHolderImage from '../../assets/placeholder--dog.png'

export default function PetCard({...information}) {

    let image;
    switch(information.species) {
        case 'Dog':
            image = `${information.species}`
            break;
        case 'Cat':
            image = information.species
            break;
        case 'Barnyard':
            image = `paw`
            break;
        default:
            image = 'paw'
    }

    const placeholderImage = `../src/assets/placeholder--${image}.svg`

    return (
            <Card maxW='sm'>
                <CardBody>
                        <Image
                            src= {information.photo == null ? placeholderImage : information.photo.full }
                            alt={information.breed}
                            borderRadius='lg'
                            w='200px'
                            h='200px'
                        />
                    
                    <Stack mt='6' spacing='3'>
                    <Link href={information.url}><Heading size='md' textAlign={'center'}>{information.name}</Heading></Link>
                    <Text color='blue.600' fontSize='2xl' textAlign={'center'}>
                        {information.gender}
                    </Text>
                    <Text fontSize='xs' textAlign='center' noOfLines={1}><Link>{information.email_contact}</Link></Text>
                    </Stack>
                </CardBody>
            </Card>
    )
};