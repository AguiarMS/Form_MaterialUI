import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import { Container, Button, Card, CardContent, Grid, Typography, Divider, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Logo from '../assets/img/bempaggo.png'
import '../styles/checkout.css'

export const CheckoutPage = () => {

  const [value, setValue] = React.useState(null);

  const navigate = useNavigate();

  function handleClickHome() {
    navigate('/')
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
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
              <img className="img-logo" src={Logo}></img>
            </Grid>
          </Grid>

        </CardContent>

        <Divider />

        <CardContent>

          <Grid Container spacing={1}>
            <Grid xs={12} sm={6} item sx={{
              padding: '10px',
            }}>
              <div className="info-payment">
                <div className="div1">Assinatura básica</div>
                <div className="div2">$17.90</div>
                <div className="div3">Imposto</div>
                <div className="div4">$1.15</div>
              </div>
            </Grid>
          </Grid>

        </CardContent>

        <Divider />

        <CardContent sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>

          <div className="txt-preco">Preço total</div>
          <div className="txt-total">$19.05</div>

        </CardContent>

      </Card>


      <Card
        classes={{ root: 'card-root' }}
        sx={{
          marginTop: '100px',
          borderRadius: '8px'
        }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}>
          <Typography variant="h5">Preencha os campos abaixo</Typography>
        </Box>

        <CardContent sx={{
          maxWidth: '700px'
        }}>
          <Grid Container spacing={1} >
            <Grid xs={12} sm={6} item sx={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              margin: '10px'
            }}>



              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                <TextField className="input-numCard" label="Número do cartão" variant="outlined" />


                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="dd/mm/aaaa"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <TextField className="input-name-Client" label="Nome do proprietário" variant="outlined" />
                <TextField className="input-cvv" label="CVV" variant="outlined" />
              </Box>

            </Grid>
          </Grid>


        </CardContent>

        <Divider />

        <CardContent>
          <Box sx={{
            display: 'flex',
            margin: '7px 0',
            justifyContent: 'flex-end'
          }}>

            <Button
              className="btn-back"
              variant="outlined"
              onClick={handleClickHome}
            >
              Voltar
            </Button>

            <Button className="btn-buy" variant="contained">Realizar Pagamento</Button>


          </Box>
        </CardContent>




      </Card>



    </Container>
  )
}