import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton'; // CUSTOM COMPONENTS

import { FlexBetween, FlexBox } from '@/components/flexbox';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM ICON COMPONENTS

import Edit from '@/icons/Edit';
import ChevronLeft from '@/icons/ChevronLeft'; // CUSTOM PAGE SECTION COMPONENTS

import Stepper from '../Stepper';
import OrderSummery from '../order-summery';
export default function PaymentPageView() {
  const navigate = useNavigate();
  const [selectPaymentMethod, setSelectPaymentMethod] = useState('paypal');

  const handleChangePaymentMethod = event => {
    setSelectPaymentMethod(event.target.value);
  };

  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* STEPPER SECTION */
      }
        <Grid size={12}>
          <Box mt={3} maxWidth={700}>
            <Stepper stepNo={2} />
          </Box>
        </Grid>

        {
        /* PAYMENT METHOD SELECTION FORM */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <Card className="p-3">
            <H6 fontSize={16} mb={3}>
              Payment Method
            </H6>

            {
            /* PAYPAL METHOD */
          }
            <FlexBox alignItems="center">
              <Radio value="paypal" onChange={handleChangePaymentMethod} checked={selectPaymentMethod === 'paypal'} sx={{
              paddingLeft: 0
            }} />

              <img src="/static/payment/paypal-text.svg" alt="Paypal" />
            </FlexBox>

            <Divider sx={{
            my: 2
          }} />

            {
            /* CREDIT CARD METHOD */
          }
            <FlexBox alignItems="center">
              <Radio value="card" sx={{
              paddingLeft: 0
            }} onChange={handleChangePaymentMethod} checked={selectPaymentMethod === 'card'} />

              <FlexBetween flexGrow={1}>
                <Paragraph fontWeight={500}>Credit or debit card</Paragraph>

                <FlexBox gap={1}>
                  <img src="/static/payment/visa.svg" alt="Visa Card" />
                  <img src="/static/payment/MasterCard.svg" alt="Master Card" />
                  <img src="/static/payment/AmericanExpress.svg" alt="American Express" />
                </FlexBox>
              </FlexBetween>
            </FlexBox>

            <Box mt={2} mb={3}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField label="Card Number" fullWidth />
                </Grid>

                <Grid size={{
                md: 6,
                xs: 12
              }}>
                  <TextField label="Exp Date" fullWidth />
                </Grid>

                <Grid size={{
                md: 6,
                xs: 12
              }}>
                  <TextField label="CVC" fullWidth />
                </Grid>
              </Grid>
            </Box>

            <Divider sx={{
            my: 2
          }} />

            {
            /* CASH ON DELIVERY METHOD */
          }
            <FlexBox alignItems="center">
              <Radio value="cash" sx={{
              paddingLeft: 0
            }} onChange={handleChangePaymentMethod} checked={selectPaymentMethod === 'cash'} />

              <Paragraph fontWeight={500}>Cash on Delivery</Paragraph>
            </FlexBox>
          </Card>

          <Box mt={2}>
            <Button disableRipple variant="text" startIcon={<ChevronLeft />} onClick={() => navigate('/dashboard/billing-address')}>
              Back
            </Button>
          </Box>
        </Grid>

        {
        /* BILLING ADDRESS & ORDER SUMMERY SECTION */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <Card sx={{
          padding: 3,
          mb: 3
        }}>
            <FlexBetween mb={1.5}>
              <H6 fontSize={16}>Billing Address</H6>

              <IconButton>
                <Edit sx={{
                fontSize: 16,
                color: 'text.secondary'
              }} />
              </IconButton>
            </FlexBetween>

            <Paragraph mb={0.5}>
              Office UI lib <Span color="text.secondary">(Home)</Span>
            </Paragraph>

            <Paragraph color="text.secondary">
              Ap #285-7193 Ullamcorper Avenue <br /> Amesbury HI 93373 <br /> US
            </Paragraph>
          </Card>

          <OrderSummery buttonText="Place Order" handleClick={() => navigate('/dashboard/payment-complete')} />
        </Grid>
      </Grid>
    </div>;
}