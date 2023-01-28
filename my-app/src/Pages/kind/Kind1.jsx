import React, { useState } from "react";

import {
  Text,
  Stack,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Lorem,
  Box,
  Textarea,
  FormLabel,
  FormControl,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
let IntialData = {
  id: Date.now(),

  foodimg: "",

  place: "",

  description: "",
};

const Directory1 = (props) => {
  let [kindMoment, setKindMoment] = useState(IntialData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };
  const handlesubmit1 = (e) => {
    e.preventDefault();
    props.onSubmit1(country);
  };

  const handleChange = (e) => {
    let { value, name } = e.target;

    setKindMoment({ ...kindMoment, [name]: value });
  };
  const handleSubmit0 = () => {
    console.log(kindMoment);
    if (kindMoment.foodimg && kindMoment.place && kindMoment.description) {
      axios
        .post("https://kindmeal-db.onrender.com/address", {
          ...kindMoment,
        })
        .then((res) => {
          setKindMoment(IntialData);
          onClose();
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Please fill all required fields");
    }
  };

  return (
    <Box width="100%" bg="#f0f0f0">
      <Box
        width="80%"
        margin="auto"
        textAlign="left"
        padding="40px"
        textColor=""
      >
        <Stack spacing={4}>
          <Text fontSize="3xl">
            KindMoments |Saving Lives with Yummy Photos
          </Text>
          <Text fontSize="l">
            Discover new, delicious meat-free cuisines enjoyed by other
            compassionate food lovers. Share your interesting KindMoments, and
            build your own fans and followers to encourage kind, healthy meals.
          </Text>
          <Text fontSize="l">
            Download our mobile app to easily showcase your masterpieces and
            interact with food lovers.
          </Text>
          <Text fontSize="l">Get started sharing your tasty moments now.</Text>

          {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
          <Stack direction={["column", "row"]} spacing="34px" width={"500"}>
            <Box h="20px">
              <form onSubmit={handlesubmit}>
                <Input
                  placeholder="Search Shop Name"
                  size="md"
                  width="100%"
                  padding="20px"
                  bg="white"
                  fontSize="15px"
                  name="search"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                />
              </form>
            </Box>

            <Box height="20px" fontSize="15px" margin="auto" padding={"5px"}>
              <select
                name="country"
                value={country}
                onClick={handlesubmit1}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option padding="15px">All Shops in Malashiya</option>
                <option value="Berjaye Cafe">Berjaye Cafe</option>
                <option value="Berjaye Cafe">Berjaye Cafe</option>
                <option value="Ba-Xian Cafe">Ba-Xian Cafe</option>
                <option value="Arti Wodless Cafe">Arti Wodless Cafe</option>
              </select>
            </Box>

            <Box h="40px" marginLeft={"10px"}>
              <Button
                bg="red"
                borderRadius="5px"
                color="White"
                fontSize="22px"
                size={["sm", "sm", "md"]}
                width={["100px", "120px", "120px"]}
              >
                Search Shop
              </Button>
            </Box>

            <Box width="15%">
              <Button
                bg="green"
                borderRadius="5px"
                color="White"
                fontSize="22px"
                size={["sm", "sm", "md"]}
                // width={["100px", "120px", "120px"]}
                onClick={onOpen}
              >
                Share Your KindMoment
              </Button>
              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Share A KindMoment</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Box>
                      {" "}
                      Share your delicious meat-free meal or drinks with food
                      lovers out there! Just select the photo, write a
                      description and optionally include the location. Do share
                      it with your friends on social media too!
                    </Box>
                    <Box
                      mt="20px"
                      display="flex"
                      flexDirection="column"
                      gap={5}
                    >
                      {" "}
                      <FormControl
                        isRequired
                        display="flex"
                        justifyContent="space-between"
                      >
                        <FormLabel w="30%">Add Photo</FormLabel>

                        <Input
                          name="foodimg"
                          onChange={handleChange}
                          type="url"
                          width="70%"
                          value={kindMoment.foodimg}
                          placeholder="+ Add Photo url"
                        />
                      </FormControl>
                      <FormControl
                        isRequired
                        justifyContent="space-between"
                        display="flex"
                      >
                        <FormLabel w="30%">Place</FormLabel>

                        <Input
                          name="place"
                          onChange={handleChange}
                          type="text"
                          width="70%"
                          value={kindMoment.place}
                          placeholder="Where is the place?"
                        />
                      </FormControl>
                      <FormControl
                        isRequired
                        justifyContent="space-between"
                        display="flex"
                      >
                        <FormLabel w="30%">Describe Moment</FormLabel>

                        <Box w="70%">
                          <Textarea
                            type="text"
                            name="description"
                            onChange={handleChange}
                            height=" 150px"
                            borderRadius="10px"
                            // value={kindMoment.description}
                            placeholder="Describe your yummylicious moment..."
                          />
                        </Box>
                      </FormControl>
                    </Box>
                  </ModalBody>

                  <ModalFooter>
                    <Button onClick={handleSubmit0} colorScheme="green" mr={3}>
                      Share Moment
                    </Button>
                    <Button colorScheme="red" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default Directory1;
