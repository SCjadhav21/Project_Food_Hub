import {Box, Button, Heading,  HStack,  Image, Link, SimpleGrid, Stack, Text,WrapItem,Input,Select} from '@chakra-ui/react'
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
    const[name,setName]=useState("")
    const[form,setForm]=useState("")
    

    useEffect(() => {
      document.title = `Featured Meat-Free Deals & Vegetarian Food In Malaysia | KindMeal.my`;
    }, []);


useEffect(()=>{

    handleGetRestaurantsData(page,form)
},[page,form])

useEffect(() => {
    setSearchParams({page});
  }, [page, setSearchParams]);

function handleGetRestaurantsData(page,form){
    getMoments(page,form)
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
const handleSubmit=(name)=>{
    setForm(name)

}

    return (
      <>
      <div >
      <TestimonialContent width="80%" magin="auto">
        <HStack ml={0} alignSelf="left">
          <Heading as={'h2'} fontSize={'25px'} pr={2} borderRight="2.5px solid grey" >KindMoments </Heading>
          <Text>Saving Lives with Yummy Photos</Text>
        </HStack>
        
        < TestimonialText > 
        Browse delicious meat-free, vegetarian deals from top restaurants and cafes! Just click on "Get Free Coupon" to obtain instant discounts and dine at the restaurants. No upfront payment, booking or printing is needed. If you share it on social media, you'll even DOUBLE your discount!
        </TestimonialText>
        <Text fontSize='16px' align='left' >Download our mobile app now to easily get coupons and start dining in a few seconds. Effortlessly save lives, health, environment and money now!</Text>
        
      </TestimonialContent>
        <Box bgColor="#fcfcfc" >

            <Pagination  totalPages={totalPage} currentPage={page} handlePageChange={handlePageChange} handleOnePageChange={handleOnePageChange} />
            <Stack direction={['column', 'row']} spacing='24px' width={"80%"} margin="auto">
            <WrapItem>
                <Button colorScheme='whatsapp'>Moments</Button>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='gray'>Meal Deal</Button>
            </WrapItem>
           
            <WrapItem>
                <Button colorScheme='gray'>Following</Button>
            </WrapItem>
            <WrapItem>
                <Button width={"240px"} colorScheme="white" disabled="yes"/ >
            </WrapItem>
            <WrapItem>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Search Shop Name"
                size="md"
                width="100%"
                padding="15px"
                bg="white"
                fontSize="15px"
                name="search"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
              </form>
             
            </WrapItem>
            <WrapItem>
            <Select placeholder='All Location' size='md' >
                <option val="mum">Mumbai</option>
                <option val="pun">Pune</option>
                <option val="har">Haryana</option>
                <option val="dhe">Dheradun</option>
                <option val="Nas">Nasik</option>
                <option val="mp">MP</option>
            </Select>
            </WrapItem>
            <WrapItem>
                <Button colorScheme='red'  width='140px'>Search</Button>
            </WrapItem>
            </Stack>
            
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