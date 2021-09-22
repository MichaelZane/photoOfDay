import React from 'react'
import Container from 'react-bootstrap/Container'
import Skeletontmp from "./SkeletonTmp"


const SkeletonCard = () => {
  return (
    <Container fluid="true"> 
      <Skeletontmp type="title"/>
      <Skeletontmp type="title2"/>
      <Skeletontmp type="image"/>
      <Skeletontmp type="button"/>
      <Skeletontmp type="title3"/>
      </Container>
  )
}

export default SkeletonCard
