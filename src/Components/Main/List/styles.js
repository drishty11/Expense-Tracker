import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    
    left: {
        display: 'flex',
        alignItems: 'center',
    },
    avatarIncome: {
      color: '#fff',
      backgroundColor: green[500],
    },
    avatarExpense: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
    },
    list: {
      maxHeight: '150px',
      overflow: 'auto',
      padding: '0',
    },
}));


// left: {
//     display: 'flex',
//     alignItems: 'center',
// },