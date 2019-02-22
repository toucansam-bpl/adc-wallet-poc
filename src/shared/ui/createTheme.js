import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import lightBlue from '@material-ui/core/colors/lightBlue'
import red from '@material-ui/core/colors/red'


export default () => createMuiTheme({
  palette: {
    primary: grey['A900'],
    secondary: lightBlue,
    accent: red,
    type: 'light',
  },
})
