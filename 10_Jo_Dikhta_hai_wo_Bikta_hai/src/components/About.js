import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"

class About extends Component {
    constructor(props) {
        super(props);

        // console.log('Parent Constructor Called')
    }

    componentDidMount() {
        // console.log('Parent Component Mounted')
    }

    render() {
        // console.log('Parent Component Rendered')
        return (
            <>
                <h1>About Page</h1>
                <UserClass name="First" location="Delhi" />
                {/* <UserClass name="Second" location="US" /> */}
            </>
        )

    }
}

export default About