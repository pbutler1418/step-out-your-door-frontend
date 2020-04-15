import React, { Component } from "react"
import AddExperience from "../AddExperience"
import axios from "axios"

class Experiences extends Component {
  constructor(props) {
    super(props)

    this.state = {
      experiences: []
    }
  }


  async componentDidMount() {
    try {
      const response = await axios.get(`http://localhost:3000/experiences/`)
      console.log(response.data)
      this.setState({
        experiences: response.data
      })
    }
    catch (error) {
      alert("ERROR")
    }
  }
  // deleteUser = async (user) => { await axios.delete(`/users/${id}`);;
  //   this.setState(prevState => ({
  //     user: prevState.user.filter(singleUser => singleUser.id !== user.id)
  //   }))
  // }

  render() {
    console.log(this.state.experiences)
    let allExperiences = this.state.experiences.map((experience, index) => {
      return (
        <>
          <div className = "Experience"key={index}>
            <h2>Name:</h2>
            <p>{experience.name}</p>
            <h2>Location:</h2>
            <p>{experience.location}</p>
            <h2>Description:</h2>
          <p>{experience.description}</p>
          
        </div>
        </>
      )
    })
    return (
      <div className = "Experiences">
        <h1>Experiences</h1>
        {allExperiences}
      
      </div>
      )
    }
  
}

export default Experiences