import React from 'react'
import {Row, Col} from "react-bootstrap"
import {Link} from 'react-router-dom'

export default function Job ({data}) {
  return (
    <Row>
      <Col xs={4}><Link to={data.company_name}>Company: {data.company_name}</Link></Col>
      <Col xs={4}><Link to={{pathname: data.url}} target="_blank">Job Role: {data.title}</Link></Col>
    </Row>
  )
}