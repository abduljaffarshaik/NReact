import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
             <h2>{err.status}</h2>
           
        </div>
    );
};

export default Error;