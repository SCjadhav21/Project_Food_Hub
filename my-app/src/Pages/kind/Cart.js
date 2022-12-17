import {
  Grid,
  GridItem,
  Button,
  Text,
  Divider,
  Image,
  Box,
} from "@chakra-ui/react";
const Card = ({ id, name, des, phone, foodimg, opening, avtar }) => {
  return (
    <GridItem
      spacing="20px"
      paddingTop="20px"
      textAlign="left"
      rowGap="50px"
      padding="25px"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bg="white"
      borderRadius="15px"
      id={id}
    >
      <Grid templateColumns="repeat(3,1fr)">
        <Image
          src={avtar}
          alt={name}
          height="50px"
          width="50px"
          borderRadius="50%"
        />
        <Text fontSize="20px">{name}</Text>
        <Button colorScheme="red">View</Button>
      </Grid>
      <Image
        src={foodimg}
        alt="Dan Abramov"
        width="100%"
        height="250"
        marginTop="20px"
      />

      <Text paddingTop="10px">{des}</Text>
    </GridItem>
  );
};
export default Card;
