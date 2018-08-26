/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Module - FetchApiData
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React, { Component } from 'react'
import axios from 'axios'

class FetchApiData extends Component {
  static defaultProps = {
    fetchOnStart: true
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: props.fetchOnStart ? true : false,
      data: null
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ loading: true })
    this.fetchData(nextProps.path)
  }

  componentDidMount() {
    const { path, fetchOnStart } = this.props

    if (fetchOnStart) {
      this.fetchData(path)
    }
  }

  fetchData = path => {
    axios
      .get(`http://crm-api.jndweb.com/v1/${path}`)
      .then(response => {
        this.setState({ data: response.data }, () => {
          this.setState({ loading: false })
        })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return this.props.render(this.state)
  }
}

export default FetchApiData
