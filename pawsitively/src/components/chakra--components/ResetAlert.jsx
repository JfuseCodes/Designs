
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useEffect, useRef } from 'react';

export default function ResetAlert({isOpen, onOpen, onCancel, onReset}) {
    // const {onClose } = useDisclosure()
    // console.log(getDisclosureProps);
    
    // const { onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onCancel={onCancel}
        motionPreset={'slideInBottom'}
        blockScrollOnMount={false}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Select Location
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? This will start the process over.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCancel}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onReset} ml={3}>
                Reset
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
    
}