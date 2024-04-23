import { Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const applications = [
  { id: 1, name: "John Doe", date: "2024-04-01", status: "Approved" },
  { id: 2, name: "Jane Smith", date: "2024-03-23", status: "Pending" },
  { id: 3, name: "Alice Johnson", date: "2024-02-15", status: "Denied" },
];

function PriorApplications() {
  return (
    <Box p="4">
      <Text fontSize="xl" mb="4">
        Prior Applications
      </Text>
      <List spacing={3}>
        {applications.map((app) => (
          <ListItem key={app.id}>
            <ListIcon as={FaCheckCircle} color={app.status === "Approved" ? "green.500" : app.status === "Denied" ? "red.500" : "orange.400"} />
            {`${app.name} - ${app.date} - ${app.status}`}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default PriorApplications;
