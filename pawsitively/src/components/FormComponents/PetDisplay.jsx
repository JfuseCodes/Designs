import PetCard from './PetCard';
import Header from '../chakra--components/Header'
import ResetAlert from '../chakra--components/ResetAlert';
import FilterDrawer from '../chakra--components/FilterDrawer'
import Pagination from './Pagination';
import Footer from '../chakra--components/Footer';
import { Box, Button, SimpleGrid, Flex, } from '@chakra-ui/react';
export default function PetDisplay({animalList, currentPage, formOptions,  handlePetOptions, filterSearch, animalSelection, totalPets, petsPerPage, paginate, onCancel, onReset, isOpen, handleResetButton, loading, prevStep,  handleNextFetch, handlePageFetch}) {
   
    const petCards = animalList.map(animal => {
        return <PetCard 
                key={animal.id}
                breed={animal.breeds.primary}
                age={animal.age}
                name={animal.name}
                description={animal.description}
                gender={animal.gender}
                photo={animal.primary_photo_cropped}
                email_contact={animal.contact.email}
                phone_contact={animal.contact.phone}
                url={animal.url}
                species={animal.species}
        />
    })
    
    return (
        <Flex flexDirection={{base:'column', lg:'row'}} height={{lg:'100%'}} boxShadow={{lg:'2xl'}}>
            <Header/>
          
            <Flex flexDirection={'column'} w='100%'>


                <Box position={{base:'fixed', lg:'relative'}} zIndex='1' w='100%'>
                    <Button onClick={handleResetButton} mr='4'>Reset</Button>
                    <FilterDrawer formOptions={formOptions} filterSearch={(e) => filterSearch(e)} handlePetOptions ={handlePetOptions} animalSelection={animalSelection} />
                </Box>
                <Flex overflow={{lg:'scroll'}} flexDirection={{base:'column'}} w={{base:'100%'}}>
                    <ResetAlert isOpen={isOpen} onReset={onReset} onCancel={onCancel}/>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                        {petCards}
                    </SimpleGrid>
                    <Pagination totalPets={totalPets} petsPerPage={petsPerPage} paginate={paginate} handleNextFetch={handleNextFetch} handlePageFetch={handlePageFetch} currentPage={currentPage}/>
                </Flex>
                <Footer handleBackButton={prevStep} displayBothButtons={false} />
            </Flex>
        </Flex>
    )
};