import {useRadio, Center, Box} from '@chakra-ui/react';
export default function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()

    return (
      <Box as='label'>
        <input {...input} />
        <Center
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          fontWeight={700}
          mt={{base:'4', lg:'2'}}
          mb={{base:'4', lg:'2'}}
          _checked={{
            bg: props.BG,
            color: props.textColor,
            borderColor: props.BG,
          }}
          _focus={{
            // boxShadow: 'outline',
          }}
          _hover={{
            backgroundColor: props.BG,
          }}
          width={{base:'100%', lg:'150px'}}
          height={{base:'72px', lg:'150px'}}
        >
          {props.children}
        </Center>
      </Box>
    )
  }