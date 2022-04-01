import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Paper, Button, Card, CardContent, Grid, Typography, Divider, FormGroup, FormControlLabel } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Logo from '../assets/img/bempaggo.png'
import '../styles/home.css'
import { fontSize } from '@material-ui/system';

const Home = () => {

  const [Checked, setChecked] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate('/checkout')
  }


  function Toggle() {
    setChecked(!Checked)
  }


  return (
    <Container sx={{
      maxWidth: '500px',
      width: '700px'
    }}>
      <Card sx={{
        marginTop: '100px',
        borderRadius: '10px'
      }}>
        <CardContent>

          <Grid Container spacing={1} >
            <Grid xs={12} sm={6} item sx={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img src={Logo}></img>
            </Grid>
          </Grid>

        </CardContent>

        <Divider />

        <CardContent>

          <Grid Container spacing={1}>
            <Grid xs={12} sm={6} item sx={{
              padding: '10px',
            }}>
              <Typography variant="h6">Quais adesivos ?</Typography>

              <Grid xs={12} sm={6} item sx={{
                marginTop: '10px',
              }}>

                <List sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}>
                  {['React.js', 'Vue.js', 'Angular.js'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        key={value}
                        secondaryAction={
                          <IconButton edge="end" aria-label="comments">
                          </IconButton>
                        }
                        disablePadding
                      >
                        <ListItemButton role={undefined} dense>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              tabIndex={-1}
                              disableRipple
                              onChange={e => this.setChecked({ Checked: e.target.checked })}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={value} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>


                <Typography variant="h6" sx={{
                  marginTop: '10px'
                }}>
                  Quantos adesivos de cada?

                </Typography>

                <Typography variant="h6" sx={{
                  marginTop: '10px'
                }}>

                  Observação:

                </Typography>

                <div className="box-note">
                  <TextField
                    id="outlined-multiline-static"
                    label="Escreva aqui"
                    multiline
                    rows={4}
                    sx={{ width: '100%' }}
                  />
                </div>


              </Grid>
            </Grid>
          </Grid>

        </CardContent>

        <Divider />

        <CardContent sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}>

          <Button
            variant="contained"
            classes={{ root: 'buy-root' }}
            onClick={handleClick}
          >
            Comprar
          </Button>

        </CardContent>

      </Card>



    </Container>
  )
}

export default Home