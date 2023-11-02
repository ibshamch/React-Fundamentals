import { Fragment } from "react";

const App = () => {
  return (
    <div>
      <Books />
    </div>
  );
};
export default App;

const Books = () => {
  return (
    <Fragment>
      Book:
      <Title />
      <Image />
    </Fragment>
  );
};

const Image = () => {
  return <div>This is image </div>;
};

const Title = () => <div>Harry Potter</div>;
