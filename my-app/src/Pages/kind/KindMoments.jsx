import {Box, Button, Heading,  HStack,  Image, Link, SimpleGrid, Stack, Text} from '@chakra-ui/react'
import { useState } from 'react';
import { useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';
import Pagination from "./Pagination";
import { TestimonialContent, TestimonialText } from './TestiNomial';
import { getMoments } from './api';
function KindMoments(){
    const [searchParams,setSearchParams] = useSearchParams();
    const[page,setPage] = useState((+(searchParams.get("page")))||1);
    const[totalPage,setTotalPage] = useState(1);
    const[restaurants , setRestaurants] = useState([]);
    // const navigate = useNavigate()
    // const {state,dispatch , userData , handleChange , handleSubmit } = useContext(AppContext);
    // console.log('state:', state)
    // console.log('userData:', userData)

    useEffect(() => {
      document.title = `Featured Meat-Free Deals & Vegetarian Food In Malaysia | KindMeal.my`;
    }, []);
useEffect(()=>{

    handleGetRestaurantsData(page)
},[page])
useEffect(() => {
    setSearchParams({
      page
    });
  }, [page, setSearchParams]);
function handleGetRestaurantsData(page){
    getMoments(page)
    .then(
        res=>{
           let product =  res.data
           let a = JSON.parse( product.slice(1,product.length-2));
           console.log(a.data);
           setRestaurants(a.data.items)
           setTotalPage(10)
           
        }
    )
    .catch(
        err => console.log(err)
    )
}
const handlePageChange =(p)=>{
    setPage(p)
}
const handleOnePageChange=(p)=>{
    setPage(page =>page+p)
}

// console.log('restaurants:', restaurants);
// console.log('totalPage:', totalPage)
    return (
      <>
      <div width="80px">
      <TestimonialContent width="80%">
        <HStack ml={0} alignSelf="left">
          <Heading as={'h2'} fontSize={'25px'} pr={2} borderRight="2.5px solid grey" >KindMoments </Heading>
          <Text>Saving Lives with Yummy Photos</Text>
        </HStack>
        
        < TestimonialText > 
        Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!
        </TestimonialText>
        <Text fontSize='16px' align='left' >Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</Text>
        
      </TestimonialContent>
        <Box bgColor="gray.100" >

            <Pagination  totalPages={totalPage} currentPage={page} handlePageChange={handlePageChange} handleOnePageChange={handleOnePageChange} />
            <SimpleGrid columns={[1,3]} w='80%' margin='50px  auto' spacing={10} position="relative" >
                {
                    restaurants.map(item =>(
                       
                        <Box key={item.dealid}  rounded={20} boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'  h='26rem' position='relative' bg='white' >
                            <Stack direction={'row'} justifyContent='space-between' p={3}>
                                <HStack>
                            <Box><Image src={item.mphoto} w={45} rounded='full' alt={item.mname}/></Box>
                            <Box>{item.mname}</Box>
                            </HStack>
                            <Button colorScheme='red'>View</Button>

                            </Stack>
                            <Box>
                            <Image cursor='pointer' src={item.mophoto} w='100%' h="15rem" />
                            </Box>
                            <Box>
                            {/* <Text bg='#00000080' fontSize='1.25rem' color='#fff' fontWeight='500' > {item.motext} </Text> */}
                            </Box>
                            {/* <Circle fontSize='1.5vw'fontWeight='500' w='60px' h='60px' bg='whiteAlpha.800' position='absolute' top='4%' left='4%'  > -{item.dealdiscount1} </Circle> */}
                            <Text textAlign='left' fontSize='1.5vw' m={2} color='#666666' > {item.shopname_short} </Text>
                            {/* <Text  h='9%' overflow='hidden' textAlign='left'm={2} > {item.dealdesc}</Text> */}
                            <Text textAlign='left'm={2}>{item.motext}<Link color='blue.400'  href= '/moment:{momentid}' >see more</Link> </Text> 
                        </Box> 
                    ))
                }
            </SimpleGrid>
            <Pagination  totalPages={totalPage} currentPage={page} handlePageChange={handlePageChange} handleOnePageChange={handleOnePageChange} />
            <Box align="center"><Image src="https://www.kindmeal.my/images/how_kindmeal_works.png" alt="meals_footer_image" /></Box>
        </Box></div>
        </>
    )
}
export default KindMoments;