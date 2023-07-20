import { useRouteError } from "react-router-dom"
const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <>
            <h1>Oops! Something went wrong!</h1>
            <p>{error.status} : {error.statusText}</p>
        </>
    )
}

export default Error
