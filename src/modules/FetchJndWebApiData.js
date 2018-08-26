/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Module - FetchJndWebApiData
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import { Component } from 'react'
import axios from 'axios'

class FetchJndWebApiData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      response: null
    }
  }

  componentWillReceiveProps = (nextProps) => {
    const { path, params } = nextProps

    this.setState({ loading: true }, () => {
      this.fetchData(path, params)
    })
  }

  componentDidMount() {
    const { path, params } = this.props

    this.fetchData(path, params)
  }

  fetchData = (path, params) => {
    axios
      .get(`http://crm-api.jndweb.com/v1/${path}`, {
        params,
      })
      .then(response => {
        this.setState({ response: response.data }, () => {
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

export default FetchJndWebApiData
