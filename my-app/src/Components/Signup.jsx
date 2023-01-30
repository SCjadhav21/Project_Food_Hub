import {
  Modal,
  ModalContent,
  ModalHeader,

  ModalCloseButton,
  useDisclosure,
  Button,Box,Image, Heading,Text

} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Signup=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
      <>

      <Button mt={4} onClick={onOpen} marginTop={""}  color="black" >
        Signup
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent  margin="auto" textAlign="center" justifyConten="center" paddingBlock={5}>
          <ModalHeader>
              <Image src="https://www.kindmeal.my/images/logo-kindmeal.png"alt="logot"paddingLeft={120}/>
              <Heading size="lg">Join KindMeal For FREE Now</Heading>
              <Text>Please select the type of membership to proceed</Text>


              <Link to="/Signup1">
              <Box border="1px solid gray" borderRadius="15px" margin="40px" textAlign="left" display="flex" onClick={onClose} padding={6} columnGap="5" rowGap={5}>
                  <Box width="40%">
                      <Image src="https://www.kindmeal.my/images/join_normal.png" alt="ss"/>

                  </Box>
                  <Box width="60%">
                      <Heading size="md" marginBottom={2}>Food Lover</Heading>
                      <Text fontSize="17" color="gray">Join FREE to enjoy yummy deals, share reviews & meet our community of compassionate food lovers.</Text>

                  </Box>

              </Box>
              </Link>
              <Link to="/Help">
              <Box border="1px solid gray"textAlign="left" borderRadius="15px" margin="40px" display="flex" onClick={onClose} padding={6} columnGap="5">
                  <Box width="40%">
                      <Image src="https://www.kindmeal.my/images/join_shop.png" alt="ss"/>

                  </Box>
                  <Box width="60%">
                      <Heading size="md" marginBottom={2}>Restaurant / Shop Owner</Heading>
                      <Text fontSize="17" color="gray">List your food outlet, create exciting vegetarian deals & showcase your delicious menu for FREE. Enjoy our yummy deals, share reviews & meet food lovers too.</Text>
                  </Box>

              </Box>
              </Link>
                  
                  <Box display="flex" paddingTop={10} justifyContent="space-between">
                      <Text>Forgot password?</Text>
                      <Text>Not a member? Sign up FREE!</Text>
                  </Box>
          </ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  )
}
export default Signup
