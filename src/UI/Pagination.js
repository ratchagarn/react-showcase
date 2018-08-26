/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Features - Example03/Pagination
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

export const Pagination = ({
  className,
  pageCount,
  initialPage,
  marginPagesDisplayed,
  pageRangeDisplayed,
  onPageChange,
}) => (
  <div className={className}>
    <ReactPaginate
      pageCount={pageCount}
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      previousLabel="«"
      nextLabel="»"
      breakLabel={<span>...</span>}
      breakClassName="break-me"
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName="active"
    />
  </div>
)

Pagination.defaultProps = {
  pageCount: 1,
  initialPage: 1,
  marginPagesDisplayed: 2,
  pageRangeDisplayed: 5,
  onPageChange: () => {},
}

export default styled(Pagination)`
  .pagination {
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;

    > li {
      display: inline-block;
      margin: 0 2px;

      > a {
        display: inline-block;
        padding: 4px 8px;
        color: #333;
        cursor: pointer;
        border-radius: 2px;
        outline: none;
        transition: .2s;

        &:hover {
          background-color: #EFEFEF;
        }
      }

      &.active {
        > a {
          background-color: blue;
          color: white;
        }
      }

      &.disabled {
        > a {
          color: #CCC;
        }
      }

      &.break-me {
        padding: 4px 8px;
      }
    }
  }
`
