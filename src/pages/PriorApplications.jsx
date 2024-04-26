import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaSort } from "react-icons/fa";

const initialApplications = [
  { id: 1, name: "John Doe", date: "2024-04-01", status: "Approved" },
  { id: 2, name: "Jane Smith", date: "2024-03-23", status: "Pending" },
  { id: 3, name: "Alice Johnson", date: "2024-02-15", status: "Denied" },
];

function PriorApplications() {
  const [applications, setApplications] = useState(initialApplications);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = initialApplications.filter((app) => app.name.toLowerCase().includes(value) || app.status.toLowerCase().includes(value) || app.date.includes(value));
    setApplications(filtered);
  };

  return (
    <Box p="4">
      <Input placeholder="Search applications..." onChange={handleSearch} mb="4" />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                Name <FaSort />
              </Th>
              <Th>
                Date <FaSort />
              </Th>
              <Th>
                Status <FaSort />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {applications.map((app) => (
              <Tr key={app.id}>
                <Td>{app.name}</Td>
                <Td>{app.date}</Td>
                <Td>{app.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PriorApplications;
