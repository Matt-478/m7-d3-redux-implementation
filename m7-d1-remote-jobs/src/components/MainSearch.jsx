import React from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import {Link} from "react-router-dom"
import Job from './Job'

export default class MainSeaarch extends React.Component {

  state = {
    query: "",
    data: []
  }

  baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search="

  handleChange = (e) => {
    this.setState({query: e.target.value}
      )
  }

  preventSubmit = async(e) => {
    e.preventDefault()

    const response = await fetch(this.baseEndpoint + this.state.query)

    if(!response.ok) {
       alert("error whilst fetching results")
       return
    }

    const { data } = await response.json() //jobs is a property in this promise

    this.setState({data})
    console.log(this.state.data)
  }

  render() {
   return(
    <Container>
      <Row>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={this.preventSubmit}>
            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} />
          </Form>
        </Col>
        <Col  xs={10} className="mx-auto">
          {
            this.state.data.map(jobData => <Job data={jobData}/>)
          }
         </Col>
      </Row>
    </Container>
   ) 
  }
}