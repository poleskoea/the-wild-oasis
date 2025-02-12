import CabinTable from "../features/cabins/CabinTable";

import Heading from "../ui/Heading";

import AddCabin from "../features/cabins/AddCabin";
import Row from "../ui/Row";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
