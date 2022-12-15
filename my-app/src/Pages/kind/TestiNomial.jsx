import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';


 const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
  };
  
  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue('gray.200', 'gray.600')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        // align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('gray.200', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };
  
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };
  
  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={'left'}
        fontSize={'md'}>
        {children}
      </Text>
    );
  };



<Testimonial>
<TestimonialContent>
  <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
  <TestimonialText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
    neque sed imperdiet nibh lectus feugiat nunc sem.
  </TestimonialText>
</TestimonialContent>
</Testimonial>

export {Testimonial,TestimonialText,TestimonialContent,TestimonialHeading}