import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {BuilderPage} from './BuilderPage'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Dashboard</PageTitle>
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper
