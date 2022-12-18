import {
  Grid,
  GridItem,
  Stack,
  Button,
  Text,
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
const Card = ({ id, articlesimg, articletitle, description }) => {
  return (
    <GridItem
      paddingTop="20px"
      textAlign="left"
      rowGap="50px"
      padding="25px"
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
      borderRadius="15px"
      id={id}
    >
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w={["100%", "100%"]}>
          <Image src={articlesimg} alt="abc" height="300px" width={400} />
        </Box>
        <Box w={["100%", "100%"]}>
          <Heading size={["m", "l", "xl"]}>{articletitle}</Heading>
          <Text>{description}</Text>
          <br />
          <Button colorScheme="red"><Link to={`/article/${id}`}>View Articles</Link></Button>
        </Box>
      </Stack>
    </GridItem>
  );
};
export default Card;
