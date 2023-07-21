import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            userInfo: {
                name: "Default Name",
                location: "Default Location"
            }
        }
        // console.log(this.props.name+" Child Constructor Called")
    }

    async componentDidMount() {
        console.log(this.props.name + " Child Component Mounted")
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data[0]);

        this.setState({
            userInfo: {
                name: data[0].name,
                location: data[0].address.city
            }
        })
    }

    componentDidUpdate() {
        console.log(this.props.name + " Child Component Updated")
    }


    render() {
        // console.log(this.props.name+" Child Component Rendered")
        const { name, location } = this.state.userInfo;

        const { count } = this.state;
        return (
            <div className="user-card">
                <h2>{name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact: @konpeeyush</h4>
                <button onClick={() => {
                    this.setState({
                        count: count + 1,
                    })
                }}>
                    Increase Count
                </button>
                <button
                    onClick={() => {
                        this.setState({
                            count: 0,
                        })
                    }}
                >
                    Reset Count
                </button>
                <p>Count: {count}</p>
            </div>
        )
    }
}

export default UserClass;