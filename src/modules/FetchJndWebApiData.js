/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Module - FetchJndWebApiData
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import { Component } from 'react'
import axios from 'axios'

class FetchJndWebApiData extends Component {
  static defaultProps = {
    delay: 0,
    onSuccess: () => {},
    onError: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      response: null
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (JSON.stringify(nextProps) === JSON.stringify(this.props)) { return }

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
    const { delay, onSuccess, onError } = this.props

    axios
      .get(`http://crm-api.jndweb.com/v1/${path}`, {
        params,
      })
      .then(response => {
        this.setState({ response }, () => {
          setTimeout(() => {
            this.setState({ loading: false }, () => {
              onSuccess(response)
            })
          }, delay)
        })
      })
      .catch(error => {
        onError(error)
      })
  }

  render() {
    return this.props.render(this.state)
  }
}

export default FetchJndWebApiData
