import { Container } from "@mui/system";
import { BodyDash } from "../components/BodyDash/BodyDash";
import { HeaderDash } from "../components/HeaderDash/HeaderDash";

export const Dashboard = () => {
  return (
    <>
      <Container>
        <HeaderDash />
        <BodyDash />
      </Container>
    </>
  );
};
