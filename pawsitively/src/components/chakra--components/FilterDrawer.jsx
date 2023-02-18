import {Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter,Input, useDisclosure, Select, Text} from '@chakra-ui/react'
import PetDetails from '../FormComponents/PetDetails'

export default function FilterDrawer({formOptions, filterSearch, handlePetOptions, animalSelection}) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // console.log(formOptions);
    // let {breeds, coat, colors, genders} = formOptions;
    // // console.log(colors, genders);
    //  const breedOptions = breeds.map( (item) => <option key={item.id} id={item.id} value={item.name}>{item.name}</option>),
    //        coatOptions = coat.map( item => <option value={item}>{item}</option>),
    //        colorOptions = colors.map( item => <option value={item}>{item}</option>),
    //        genderOptions = genders.map(item => <option value={item}>{item}</option>)
    return (
      <>
        <Button onClick={onOpen}>Open Filter Settings</Button>
        <Drawer isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>What type of Pet are you looking for?</DrawerHeader>
  
            <DrawerBody>
               {/* <form
                id='my-form'
                // onSubmit={(e) => {
                //   e.preventDefault()
                //   console.log('submitted')
                // }}
                
              > */}

            <form id='my-form' onSubmit={e => filterSearch(e)}>
            {/* <Text>Yay, we love {animalSelection}s! Give us the basics about your search.</Text>
                        <label>Breed</label>
                        <Select variant='outline' placeholder='Look for specific breed' onChange={(e) => handlePetOptions(e)}>
                            {breedOptions}
                        </Select>
                        <label>Coat</label>

                        <Select variant='outline' placeholder='select specific hair length' onChange={handlePetOptions}>
                            {coatOptions}
                        </Select>
                        <label>Color</label>
                        <Select variant='outline' placeholder='select hair color' onChange={handlePetOptions}>
                            {colorOptions}
                        </Select>
                        <label>Gender</label>
                        <Select variant='outline' placeholder='select specific gender' onChange={handlePetOptions}>
                            {genderOptions}
                        </Select> */}
                <PetDetails 
                    formOptions={formOptions}
                    handlePetOptions={handlePetOptions}
                    filterSearch={filterSearch}
                    animalSelection={animalSelection}
                 />
              </form>
            </DrawerBody>
  
            <DrawerFooter mb={'60px'}>
              <Button type='submit' form='my-form'>
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }