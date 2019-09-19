import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'

import { loadMessage } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    loadMessage()
  }

  render() {
    const { welcomeMessage } = this.props
    return <>{welcomeMessage}</>
  }
}

const mapStateToProps = state => {
  return {
    welcomeMessage: state.userWelcome.welcomeMessage,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    loadMessage
  )(Home)
)
