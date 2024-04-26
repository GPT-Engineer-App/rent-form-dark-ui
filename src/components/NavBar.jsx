import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="flex-start">
      <Link as={RouterLink} to="/" p="2">
        Home
      </Link>
      <Link as={RouterLink} to="/applications" p="2">
        Prior Applications
      </Link>
      <Link as={RouterLink} to="/profile" p="2">
        Profile
      </Link>
    </Flex>
  );
}

export default NavBar;
