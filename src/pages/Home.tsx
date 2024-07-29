/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";
import StepperCustom from "../components/forms/Stepper";

export interface ItemInterface {
  id: string;
  name: string;
}

const Home = () => {

  return (
    <Fragment>
      <StepperCustom />
    </Fragment>
  )
}

export default Home
