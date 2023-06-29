import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // console.log(error);

  return (
    <>
      <h1>Oops...</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <p>
        {isRouteErrorResponse(error) ? "Invalid Page!" : "Unexpected Error!"}
      </p>
    </>
  );
};

export default ErrorPage;
