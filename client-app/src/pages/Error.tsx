import {Link, useRouteError, isRouteErrorResponse} from "react-router-dom";
import {Container} from "react-bootstrap";

const Error = () => {
  const error = useRouteError()
  let errorStatus : number;
  let errorStatusText: string;
  
  if(isRouteErrorResponse(error)){
    errorStatus=error.status;
    errorStatusText=error.statusText;
  }else{
    errorStatus =404;
    errorStatusText = "Page not Found"
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      <Link to="/" replace={true}>
        It looks like you reached a non-exesting page, <br /> 
        let's go back to your app
      </Link>
    </Container>
  )
}

export default Error
