import {Box,Button, Flex, Link} from '@chakra-ui/react';
import { useEffect } from 'react';
export default function Pagination ({petsPerPage, totalPets, paginate, handleNextFetch, handlePageFetch, currentPage}) {
    
    let visiblePages = 5;
    
    
    //calculate total number of pages
    const totalPages = Math.ceil(totalPets / petsPerPage);

    //Ensure that the visible pages do not exceed the total number of pages
    const maxVisiblePages = Math.min(totalPages, visiblePages);
    
    //calculate the start and end page nubmers to display
    const startPage = currentPage - Math.floor(visiblePages / 2),
          endPage = currentPage + Math.floor(visiblePages / 2),
        //   start = startPage > 0 ? startPage : 1,
        start = Math.max(startPage, 1),
        end = Math.min(endPage, totalPages),

        pageNumbers = Array.from({length: end - start + 1}, (_, i) => {return start + i})
    
    const disableButton = {
        disabled: currentPage === totalPages ? true : false
    }
    
    const pageNumberMap = pageNumbers.map(page => (
        
        <Button  
            key = {page} 
            onClick={() => handlePageFetch(page)}
            style={{backgroundColor: page === currentPage ? '#D1E3DD' : '',}}
            marginLeft={{base:'.5', lg:'2'}}
            marginRight={{base:'.5', lg:'2'}}
           
            w={{base:'5px'}}
            >
                {page}
            </Button>
    ));
    return (

        <Box display={'flex'} justifyContent='end' mt={{base:'12px'}}>
            <Flex>
                {currentPage > 1 && <Button onClick={() => handlePageFetch(currentPage - 1)}>&larr;</Button>}
                {start > 1 && (<Button onClick={() => handlePageFetch(1)}>1</Button>)}
                {start > 2 && totalPages > 7 && <Button>...</Button>}
                {pageNumberMap}
                {end < totalPets - 1 && totalPages > maxVisiblePages  && currentPage < totalPages - 5 && <Button>...</Button>}
                {end <= totalPets && totalPages > maxVisiblePages && currentPage < totalPages - 5 && <Button ml={{base:'.5', lg:'2'}} onClick={() => handlePageFetch(totalPages)}>{totalPages}</Button> }
                <Button isDisabled={disableButton.disabled} onClick={handleNextFetch} ml={{base:'.5', lg:'2'}} bg={'#686e8f'} _hover={{bg: '#474b60'}} textColor={'#FDFFFC'}>&rarr;</Button>
            </Flex>
        </Box>
    )
}