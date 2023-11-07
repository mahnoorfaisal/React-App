import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

function GameCardSkeleton() {
  return (
   <Card>
    <Skeleton height="200px" width="300px" borderRadius={10} overflow={"hidden"}></Skeleton>
    <CardBody>
        <SkeletonText></SkeletonText>
    </CardBody>
   </Card>
  )
}

export default GameCardSkeleton
