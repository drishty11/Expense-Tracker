import { makeStyles } from '@material-ui/core/styles';
import Image from '../images/Isometric.png';
export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    // backgroundImage: `url(${gridImg})`,
    background: "linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), rgb(180, 180, 255,0.4)",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  frontContainer: {
    // fontFamily: "'Poppins', sans-serif",
    // fontFamily: "'Roboto', sans-serif",
    fontFamily: "'Montserrat', sans-serif",
    padding: '0 30px',
    backgroundImage: `url(${Image})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto"
  },
  left: {
    display: 'flex',
    margin: 'auto 0',
  },
  btn: {
    width: 'fit-content',
    textDecoration: "none",
    textAlign: 'center',
    fontSize: "16px",
    // fontWeight: '500',
    padding: "10px 20px",
    margin: "30px 18px",
    background: 'rgb(96,80,220)',
    color: "#fff",
    borderRadius: '6px',
    '&:hover': {
      background: 'rgba(96,80,220,0.9)',
    }
  },
  
}));