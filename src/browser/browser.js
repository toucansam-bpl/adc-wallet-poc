import React from 'react'
import { Provider as MobxProvider } from 'mobx-react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from '../shared/App'
import AdcInfoStore from '../shared/stores/AdcInfoStore'
import createTheme from '../shared/ui/createTheme'
import NodeApi from '../shared/domain/NodeApi'


class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return <App />
  }
}


const nodeApi = new NodeApi()
const adcInfoStore = new AdcInfoStore(nodeApi)

const stores = {
  adcInfoStore,
}

adcInfoStore.init()


hydrate(
  <MuiThemeProvider theme={createTheme()}>
    <MobxProvider {... stores}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </MobxProvider>
  </MuiThemeProvider>,
  document.querySelector('#root'),
)
