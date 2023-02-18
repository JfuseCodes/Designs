import { Box, Card, Center,Container, CardHeader, CardBody, CardFooter, Grid, GridItem, Stack, Heading, Divider, ButtonGroup, Button, Text, Image, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import ZipCodeForm from './components/FormComponents/ZipCodeForm'
import Header from './components/chakra--components/Header'
import PetBasics from './components/FormComponents/PetBasics'
import ResetAlert from './components/chakra--components/ResetAlert'
import PetDisplay from './components/FormComponents/PetDisplay'
import Pagination from './components/FormComponents/Pagination'
import { useState, useEffect, useCallback} from 'react'
import styling from './components/styling/mainStyling';


export default function Signup() {
    const [locationData, setLocationData] = useState();
    const [locationQuery, setLocationQuery] = useState({});
    const [state, setState] = useState({
        step: 0,
        zipCode: null,
        zipCodeSearch: null,
        state: null,
        petsAtLocation: null,
        isError: false,
        warning: false,
        accessToken: null,
        petOptions: ['Dog', 'Cat', 'Rabbit', 'Horse', 'Bird', 'Barnyard'],
        animalSelection: null,
        petForm: {},
        styling: styling,
        listOfAnimals: null,
        filter: false,
        currentPage: 1,
        petsPerPage: 20,
        totalPetsFetched: null,
        reset: false,
        warning: false, 
        next:null
    });
    const [loading, setLoading] = useState(false);
    const [petQuery, setPetQuery] = useState({});
    
    //API REQUIRMENTS
    const API = {
        KEY: 'QKLzJeEvxtOXIMPeHwSZQN6iHzhM89vIKeKcuWwxOVtoGMOf83',
        SECRET: 'rZZt45MA24jvXKbr39XSZxbY3tMLHBxWZAXYsEZU',
    }
    const getMethod = {
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json',
              'Authorization' : `Bearer ${state.accessToken}`
            }
        };


    //Change Page
    const paginate = (pageNumber) => {
        setState(prevState => ({
        ...prevState,
        currentPage: pageNumber
    }))}

    //Get Access Token
    useEffect(() => {
        
        async function getAccessToken(){
            const getToken = await fetch('https://api.petfinder.com/v2/oauth2/token', {
                method: 'POST',
                headers: {
                  'Content-type' : 'application/x-www-form-urlencoded'
                },
                body: `grant_type=client_credentials&client_id=${API.KEY}&client_secret=${API.SECRET}`
            }),
                  {access_token} = await getToken.json();
            setState(prevState => ({
                ...prevState,
                accessToken: access_token
            }));
        }   

        getAccessToken();
    }, []);

    //fetch data based on zipCode
    useEffect(() => {
        async function fetchLocationData() {
            const zipCodeRequest = await fetch(`https://api.petfinder.com/v2/organizations?location=${state.zipCode}`, {
                method: 'GET',
                headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${state.accessToken}`
                }
            }),
            {organizations} = await zipCodeRequest.json();

            if(state.zipCode) setState(prevState => ({
                ...prevState,
                petsAtLocation: organizations.length > 1 ? true : false
            }));
        }


        fetchLocationData();
        async function fetchGeoCode() {
            const cityToFetch = await fetch(`https://nominatim.openstreetmap.org/search?country=US&postalcode=${state.zipCode}&format=geojson&limit=1`),
                  {features} = await cityToFetch.json()

            const currentState = features.length >= 1 ? features[0].properties.display_name.split(',')[2] : ''
            
            setState(prevState => ({
                ...prevState,
                state: currentState
            }));
        }
        fetchGeoCode()
       
    }, [state.zipCodeSearch])
    
    //useeffect based on animalSelection & current Page
    async function createPetCards() {
        const fetchAnimalData = await fetch(`https://api.petfinder.com/v2/animals?type=${state.animalSelection}&page=${state.currentPage}&location=${state.zipCode}`, {
            method: 'GET',
            headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${state.accessToken}`
            }
        }),
            {animals, pagination} = await fetchAnimalData.json()
  
            setState(prevState => ({
                ...prevState,
                listOfAnimals: animals,
                totalPetsFetched: animals ? pagination.total_count: null,
                next: animals ? pagination._links.next.href : null
            }))
    };

    
    useEffect(() => {

        async function getAnimalInformation() {
            try {
                let [selectedAnimalData, fetchBreeds, ] = await Promise.all([
                    fetch(`https://api.petfinder.com/v2/types/${state.animalSelection}`, getMethod),
                    fetch(`https://api.petfinder.com/v2/types/${state.animalSelection}/breeds`, getMethod),
                ]),
                    {type} = await selectedAnimalData.json(),
                    {breeds} = await fetchBreeds.json();
                
                setState(prevState => ({
                    ...prevState,
                    petForm: {
                        coat: type.coats,
                        colors: type.colors,
                        genders: type.genders,
                        breeds: breeds
                    }
                }))

            }
            catch(err) {console.log(err)}
        } 
        getAnimalInformation()
        createPetCards()
    }, [state.animalSelection, state.currentPage]);


    //METHODs
    const handleNextFetch = () => {

        setState(prevState => ({
            ...prevState,
            currentPage: prevState.currentPage + 1
        }))
    }

    const handlePageFetch = (value) => {
        setState(prevState => ({
            ...prevState,
            currentPage: value 
        }))
    }

    const handleCancel = () => {
        setState(prevState => ({
            ...prevState,
            warning: false,
        }));
    }
    

    const handleReset = () => {
        setState(prevState => ({
            ...prevState,
            step: 0,
            zipCode: null,
            zipCodeSearch: null,
            state: null,
            petsAtLocation:null,
            isError: false,
            warning: false, 
            animalSelection: null,
            listOfAnimals: null,
            filter: false,
            totalPetsFetched: null,
            currentPage:1,
            totalPetsFetched: null,
            reset:false,
            warning:false,
            next:null, 
        }))
    }

    const handleResetOpen = () => {
        setState(prevState => ({
            ...prevState,
            warning: true,
        }))
    }

    const handlePrevStep = () => {
        const { step } = state;
        setState(prevState => ({
            ...prevState,
            step: step - 1
        }));
    }

    const handleNextStep = () => {
        const { step } = state;
        state.animalSelection!= null && step == 1 
        
        ? 
        
        setState(prevState => ({
            ...prevState,
            isError:false,
            step: step + 1,
        }))
        
        :
        
        setState(prevState => ({
            ...prevState,
            step: step,
            isError:true
        }))

    }

    const handleChange = event => {  
        setLoading(true);
        setState(prevState => ({
            ...prevState,
            animalSelection: event
        }))
        setTimeout(() => {
            setLoading(false);
        }, 300)
    }

    const handleZipCodeInput = event => {
        event.preventDefault();
        setState(prevState => ({...prevState,
            zipCode: event.target.value
        }))
    }
    const handleZipCodeSubmit = event => {
        
        event.preventDefault();
        const zipCodeTest = /^\b\d{5}(-\d{4})?\b$/.test(state.zipCode);
        if(state.zipCode && zipCodeTest && state.zipCode.length == 5){

            setState(prevState => ({
                ...prevState,
                zipCodeSearch: true,
                step: prevState.step + 1,
                isError: false,
            }));
        }
        else {
            if(state.length !== 5) setState(prevState => ({
                ...prevState,
                isError: true
            }))
        }
    }

    const handlePetOptions = event => {
        const {value, name} = event.target
        
        setPetQuery(prevState =>({
            ...prevState,
            [name] : value
        }));
    }

    const handleFilter = event => {
        event.preventDefault();
        setState(prevState => ({
            ...prevState,
            filter: !prevState.filter
        }));
    }
    
    useEffect(() => {
        
        async function filterPets() {
            const queryParameter =  {
                breed: petQuery.breed ? `breed=${petQuery.breed}` : `breed=${''}`,
                coat: petQuery.coat && petQuery.breed ? `&coat=${petQuery.coat}` : `&coat=${petQuery.coat ? petQuery.coat : ''}`,
                gender: petQuery.gender && petQuery.breed ? `&gender=${petQuery.gender}` : `&gender=${petQuery.gender ? petQuery.gender : ''}`,
                color: petQuery.color && petQuery.breed ? `&color=${petQuery.color}` : `&color=${petQuery.color ? petQuery.color : ''}`,
            };
            const fetchPets = await fetch(`https://api.petfinder.com/v2/animals?${queryParameter.breed}${queryParameter.coat}${queryParameter.gender}${queryParameter.gender}${queryParameter.color}`, {
                method: 'GET',
                headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${state.accessToken}`
                }
            }),

            { animals, pagination } = await fetchPets.json()
            setState(prevState => ({
                ...prevState,
                listOfAnimals: animals
            }));
        }

        const objectLength = Object.keys(petQuery).length

        objectLength >= 1 ? filterPets() : ''
    }, [state.filter])

    useEffect(() => {
        setLocationData(state.petsAtLocation)
        setLocationQuery(state.state);
    }, [state.petsAtLocation]);
    
    

    switch(state.step) {
        case 0: 
            return (
                <ZipCodeForm 
                    handleSearch={handleZipCodeSubmit} 
                    handleInput={handleZipCodeInput}
                    isError={state.isError}
                />
            )
        case 1: 
            return (
                <PetBasics 
                    options={state.petOptions} 
                    styling={state.styling[0].options} 
                    handleChange={handleChange} 
                    nextStep={handleNextStep}
                    animalSelection={state.animalSelection}
                    loading={loading}
                    petsAtLocation={state.petsAtLocation}
                    locationData={locationData}
                    location={locationQuery}
                    zipCode={state.zipCode}
                    isError={state.isError}
                    isOpen={state.warning}
                    onReset={handleReset}
                    onCancel={handleCancel}
                    handleResetButton={handleResetOpen}
                />
            )
        
        case 2:
            return (
                    <PetDisplay 
                        formOptions={state.petForm}
                        animalList={state.listOfAnimals}
                        handlePetOptions={handlePetOptions}
                        filterSearch={handleFilter}
                        animalSelection={state.animalSelection}
                        totalPets = {state.totalPetsFetched}
                        petsPerPage= {state.petsPerPage}
                        paginate={paginate}
                        currentPage={state.currentPage}
                        isOpen={state.warning}
                        onReset={handleReset}
                        onCancel={handleCancel}
                        handleResetButton={handleResetOpen}
                        loading={loading}
                        prevStep={handlePrevStep}
                        handleNextFetch={handleNextFetch}
                        handlePageFetch={handlePageFetch}
                    />
            )
    }
}