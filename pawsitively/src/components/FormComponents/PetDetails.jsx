import {Button , Center, Flex, Heading,HStack, VStack, Select, Stack, Text} from '@chakra-ui/react';
import Header from '../chakra--components/Header';
import {useEffect} from 'react';
export default function PetDetails({formOptions, handlePetOptions, animalSelection}) {

   console.log(formOptions);
   let {breeds, coat, colors, genders} = formOptions;
   console.log(colors, genders);
   const breedOptions = breeds.map( (item) => <option key={item.id} id={item.id} value={item.name}>{item.name}</option>),
         coatOptions = coat.map( item => <option value={item}>{item}</option>),
         colorOptions = colors.map( item => <option value={item}>{item}</option>),
         genderOptions = genders.map(item => <option value={item}>{item}</option>)


    return (
        <Flex>
            <Center flexDirection='column'>
                <Stack direction={'column'}>
                    <Text>Yay, we love {animalSelection}s! Give us the basics about your search.</Text>
                    <label>Breed</label>
                    <Select variant='outline' placeholder='Look for specific breed' onChange={(e) => handlePetOptions(e)} name='breed'>
                        {breedOptions}
                    </Select>
                    <label>Coat</label>

                    <Select variant='outline' placeholder='select specific hair length' onChange={handlePetOptions} name='coat'>
                        {coatOptions}
                    </Select>
                    <label>Color</label>
                    <Select variant='outline' placeholder='select hair color' onChange={handlePetOptions} name='color'>
                        {colorOptions}
                    </Select>
                    <label>Gender</label>
                    <Select variant='outline' placeholder='select specific gender' onChange={handlePetOptions} name='gender'>
                            {genderOptions}
                    </Select>
                </Stack>
            </Center>
        </Flex>
    )
}