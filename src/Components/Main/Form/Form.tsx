import React,{useState, useContext, useEffect} from 'react';
import {Grid, FormControl, Typography, Button} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';
import { ExpenseTrackerContext } from '../../../Context/Context';
import { useSpeechContext } from '@speechly/react-client';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import InputAdornment from '@mui/material/InputAdornment';
import { Notification } from '../../Notification/Notification';
import useStyles from './styles';
import { expenseCategories, incomeCategories } from '../../../Utils/Categories';
import formatDate from '../../../Utils/FormatDate';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}
export const Form = () => {
    const classes = useStyles();
    const [formData, setformData] = useState(initialState);
    const { AddTransaction } = useContext<any>(ExpenseTrackerContext)
    const {segment} = useSpeechContext();
    const [open, setOpen] = useState(false);
    const tracking = [
      {
        id: 1,
        value: 'Income',
      },
      {
        id: 2,
        value: 'Expenses',
      },
    ]

    const createTransaction = () => {
        if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()}

        setOpen(true);
        AddTransaction(transaction);
        setformData(initialState);
    }

    // console.log(formData);
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    useEffect(() => {
        if (segment) {
          if (segment.intent.intent === 'add_expense') {
            setformData({ ...formData, type: 'Expense' });
          } else if (segment.intent.intent === 'add_income') {
            setformData({ ...formData, type: 'Income' });
          } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
            return createTransaction();
          } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
            return setformData(initialState);
          }
    
          segment.entities.forEach((e) => {
            // console.log(e.value)
            const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`;

            switch (e.type) {
              case 'amount':
                setformData({ ...formData, amount: e.value });
                break;
              case 'category':
                if (incomeCategories.map((iC) => iC.type).includes(category)) {
                    setformData({ ...formData, type: 'Income', category });
                } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
                    setformData({ ...formData, type: 'Expenses', category });
                }
                break;
              case 'date':
                setformData({ ...formData, date: e.value });
                break;
              default:
                break;
            }
      });
      if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
        createTransaction();
      }
      
    
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [segment]);

    return (
        <Grid container spacing={2}>
           <Notification open={open} setOpen={setOpen} />
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    {segment ? 
                        <>
                            {segment.words.map((w) => w.value).join(" ")} 
                        </>
                    : null}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    {/* <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e: any) => setformData({ ...formData, type: e.target.value })} required>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expenses">Expense</MenuItem>
                    </Select> */}
                    <TextField id="filled-select-formData" select label="Select" value={formData.type} onChange={(e: any) => setformData({ ...formData, type: e.target.value })} 
                    variant="standard" required>
                      {tracking.map((track,key) => (
                        <MenuItem key={track.id} value={track.value}>
                          {track.value}
                        </MenuItem>
                    ))}
                    </TextField>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    {/* <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e: any) => setformData({ ...formData, category: e.target.value })} required>
                        {selectedCategories.map((category,key) => (
                            <MenuItem key={category.type} value={category.type}>{category.type}</MenuItem>
                        ))}
                        <MenuItem value="Salary">Salary</MenuItem>
                    </Select> */}
                    <TextField id="standard-basic" select label="Category" variant="standard" value={formData.category} onChange={(e: any) => setformData({ ...formData, category: e.target.value })} required>
                        {selectedCategories.map((category,key) => (
                            <MenuItem key={category.type} value={category.type}>{category.type}</MenuItem>
                        ))}
                    </TextField>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" id="standard-basic" variant="standard" label="Amount" fullWidth value={formData.amount} onChange={(e: any) => setformData({...formData, amount: e.target.value})} required />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" id="standard-basic" variant="standard" label="Date" fullWidth value={formData.date} onChange={(e: any) => setformData({...formData, date: formatDate(e.target.value)})} required />
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker  label="Date" inputFormat="MM-dd-yyyy" value={formData.date} onChange={(e: any) => setformData({...formData, date: formatDate(e.target.value)})}  />
                </LocalizationProvider> */}
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>

        </Grid>
    )
}
