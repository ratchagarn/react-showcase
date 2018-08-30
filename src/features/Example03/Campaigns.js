/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03/Campaigns
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

import Loading from 'UI/Loading'
import LoadingCover from 'UI/LoadingCover'
import Pagination from 'UI/Pagination'


export const Campaigns = ({ loading, response, onPageChange }) => {
  if (loading && !response) return <Loading />

  const campaignsItems = response.data.data.map((item, i) => (
    <CampaignsItem key={item.id} data={item} />
  ))

  const { current_page, per_page, total } = response.data.meta
  const initialPage = current_page - 1
  const pageCount = Math.ceil(total / per_page)

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Id>ID</Id>
            <Name>Name</Name>
            <Promotions>Promotions</Promotions>
            <Amount align="right">Amount</Amount>
          </tr>
        </thead>
        <tbody>
          {campaignsItems}
        </tbody>
      </Table>
      <Pagination
        initialPage={initialPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
      <LoadingCover show={loading && response} />
    </Container>
  )
}

export default Campaigns


const CampaignsItem = ({ data }) => (
  <tr>
    <Id>{data.id}</Id>
    <Name>{data.name}</Name>
    <Promotions>{removeHTML(data.promotions[0].detail_en)}</Promotions>
    <Amount>{data.amount}</Amount>
  </tr>
)

/**
 * --------------------------------------------------------
 * UI
 * --------------------------------------------------------
 */
const Container = styled.div`
  position: relative;
`

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
  width: calc(100% - 700px)
`

const Promotions = styled.td`
  width: 400px;
`

const Amount = styled.td`
  width: 200px;
  text-align: right;
`


/**
 * --------------------------------------------------------
 * Helpers
 * --------------------------------------------------------
 */
function removeHTML(content) {
  const div = document.createElement('div')
  div.innerHTML = content

  return div.textContent || div.innerText || ''

}
