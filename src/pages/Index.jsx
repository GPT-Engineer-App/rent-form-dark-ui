// Real Estate Rental Application Form
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Text, useColorModeValue, Heading, Textarea, Image, Link } from "@chakra-ui/react";
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
          <Text fontSize="md" color={textColor}>
            Sunset Villas
          </Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="location" color={textColor}>
            Location
          </FormLabel>
          <Text fontSize="md" color={textColor}>
            1234 Beach Ave, Miami, FL
          </Text>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="description" color={textColor}>
            Description
          </FormLabel>
          <Image src="https://example.com/property-photo.jpg" alt="Luxurious Beachfront Property" borderRadius="md" />
          <Text fontSize="md" color={textColor} mt="2">
            A luxurious beachfront property with 3 bedrooms and 2 bathrooms, perfect for a summer getaway.
          </Text>
          <Link href="https://example.com/property-listing" isExternal color="blue.300">
            View Property Listing
          </Link>
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
