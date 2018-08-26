/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03/Campaigns
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Fragment } from 'react'
import styled from 'styled-components'

import Loading from 'UI/Loading'
import Pagination from 'UI/Pagination'


const Campaigns = ({ loading, response, onPageChange }) => {
  if (loading) return <Loading />

  const campaignsItems = response.data.data.map((item, i) => (
    <CampaignsItem key={item.id} data={item} />
  ))

  const { current_page, per_page, total } = response.data.meta
  const initialPage = current_page - 1
  const pageCount = Math.ceil(total / per_page)


  return (
    <Fragment>
      <Table>
        <thead>
          <tr>
            <Id>ID</Id>
            <Name>Name</Name>
            <Amount align="right">Amount</Amount>
          </tr>
        </thead>
        <tbody>
          {campaignsItems}
        </tbody>
      </Table>
      {!loading && (
        <Pagination
          initialPage={initialPage}
          pageCount={pageCount}
          onPageChange={onPageChange}
        />
      )}
    </Fragment>
  )
}

export default Campaigns


const CampaignsItem = ({ data }) => (
  <tr>
    <Id>{data.id}</Id>
    <Name>{data.name}</Name>
    <Amount>{data.amount}</Amount>
  </tr>
)

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;

  > thead {
    padding-bottom: 10px;
    border-bottom: 1px solid #CCC;

    > tr {
      > td {
        padding: 8px;
        font-weight: bold;
      }
    }
  }

  > tbody {
    > tr {
      &:nth-child(even) {
        background-color: #EFEFEF;
      }

      > td {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #CCC;
      }
    }
  }
`

const Id = styled.td`
  width: 100px;
  text-align: center;
`

const Name = styled.td`
  width: calc(100% - 300px)
`

const Amount = styled.td`
  width: 200px;
  text-align: right;
`
