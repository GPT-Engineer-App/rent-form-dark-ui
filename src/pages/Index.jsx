// Real Estate Rental Application Form
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useColorModeValue, Heading, Textarea } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.700", "gray.800");
  const textColor = useColorModeValue("gray.100", "white");

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} as="form" backgroundColor={bgColor} p={8} borderRadius="lg" boxShadow="xl">
        <Heading as="h1" size="xl" textAlign="center" color={textColor}>
          Rental Application Form
        </Heading>
        {}
        <FormControl>
          <FormLabel htmlFor="property-name" color={textColor}>
            Property Name
          </FormLabel>
          <Input id="property-name" placeholder="Property Name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location" color={textColor}>
            Location
          </FormLabel>
          <Input id="location" placeholder="Property Location" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description" color={textColor}>
            Description
          </FormLabel>
          <Textarea id="description" placeholder="Brief description of the property" />
        </FormControl>
        <Text fontSize="md" color={textColor}>
          Please fill in your details to apply for the rental.
        </Text>

        {/* Personal Details */}
        <FormControl isRequired>
          <FormLabel htmlFor="name" color={textColor}>
            Full Name
          </FormLabel>
          <Input id="name" placeholder="John Doe" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email" color={textColor}>
            Email Address
          </FormLabel>
          <Input id="email" type="email" placeholder="john.doe@example.com" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="phone" color={textColor}>
            Phone Number
          </FormLabel>
          <Input id="phone" type="tel" placeholder="+1234567890" />
        </FormControl>

        {/* Rental History */}
        <FormControl>
          <FormLabel htmlFor="rental-history" color={textColor}>
            Rental History
          </FormLabel>
          <Textarea id="rental-history" placeholder="Describe your previous rental experiences..." />
        </FormControl>

        {}
        <FormControl isRequired>
          <FormLabel htmlFor="monthly-income" color={textColor}>
            Monthly Income
          </FormLabel>
          <Input id="monthly-income" placeholder="Your monthly income" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="source-of-income" color={textColor}>
            Source of Income
          </FormLabel>
          <Input id="source-of-income" placeholder="Source of your income" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="employment-length" color={textColor}>
            Length of Current Employment
          </FormLabel>
          <Input id="employment-length" placeholder="Duration of your current employment" />
        </FormControl>

        {}
        <FormControl>
          <FormLabel htmlFor="employment" color={textColor}>
            Employment Information
          </FormLabel>
          <Textarea id="employment" placeholder="Details about your employment..." />
        </FormControl>

        {/* Submit Button */}
        <Button leftIcon={<FaPaperPlane />} colorScheme="purple" type="submit" size="lg" fontSize="md">
          Submit Application
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
