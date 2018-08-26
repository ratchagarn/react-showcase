/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03/Campaigns
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Fragment } from 'react'
import styled from 'styled-components'

import Loading from 'UI/Loading'
import Pagination from 'UI/Pagination'


const Campaigns = ({ loading, response }) => {
  if (loading) return <Loading />

  const campaignsItems = response.data.map((item, i) => (
    <CampaignsItem key={item.id} data={item} />
  ))

  return (
    <Fragment>
      <Table>
        <thead>
          <th>ID</th>
          <th align="left">Name</th>
          <th align="right">Amount</th>
        </thead>
        <tbody>
          {campaignsItems}
        </tbody>
      </Table>
      <Pagination />
    </Fragment>
  )
}

export default Campaigns


const CampaignsItem = ({ data }) => (
  <tr>
    <td align="center">{data.id}</td>
    <td>{data.name}</td>
    <td align="right">{data.amount}</td>
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

    > th {
      padding: 8px;
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
