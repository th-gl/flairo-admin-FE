// MUI
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead'; // CUSTOM COMPONENTS

import Link from '@/components/link';
import Scrollbar from '@/components/scrollbar';
import FlexBetween from '@/components/flexbox/FlexBetween';
import { H6, Paragraph, Span } from '@/components/typography'; // CUSTOM ICON COMPONENT

import DownloadTo from '@/icons/DownloadTo'; // CUSTOM UTILS METHODS

import { currency } from '@/utils/currency'; // STYLED COMPONENTS

import { BodyTableCell, HeadTableCell, StyledBox } from '../styles';
export default function InvoiceDetailsPageView() {
  return <div className="pt-2 pb-4">
      <Card className="p-3">
        <Grid container spacing={3}>
          <Grid size={{
          md: 7,
          xs: 12
        }}>
            <FlexBetween>
              <Box width={60}>
                <img src="/static/payment/FedEx_Express.svg" height="36px" alt="" />
              </Box>

              <Stack textAlign="right">
                <H6 fontSize={16}>Invoice #</H6>
                <Paragraph>3682303</Paragraph>
              </Stack>
            </FlexBetween>

            <FlexBetween my={3}>
              <Stack spacing={0.5}>
                <Paragraph fontWeight={600}>Bill To:</Paragraph>
                <H6 fontSize={16}>Pixy Krovasky</H6>
                <Paragraph color="text.secondary">
                  8692 Wild Rose Drive <br /> Livonia, MI 48150
                </Paragraph>
              </Stack>

              <Paragraph lineHeight={1.6} textAlign="right">
                45 Roker Terrace <br /> Latheronwheel <br /> KW5 8NW, London <br /> United Kingdom
              </Paragraph>
            </FlexBetween>

            <H6 fontSize={14} mb={1}>
              Issue Date: <Span sx={{
              color: 'text.secondary',
              fontWeight: 400
            }}>03/10/2018</Span>
            </H6>

            <H6 fontSize={14}>
              Due date: <Span sx={{
              color: 'text.secondary',
              fontWeight: 400
            }}>07/10/2018</Span>
            </H6>

            <Scrollbar>
              <Table sx={{
              mt: 3,
              minWidth: 375
            }}>
                <TableHead>
                  <TableRow>
                    <HeadTableCell>Description</HeadTableCell>
                    <HeadTableCell>Hours</HeadTableCell>
                    <HeadTableCell>Rate</HeadTableCell>
                    <HeadTableCell>Amount</HeadTableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <BodyTableCell>Minimal Design</BodyTableCell>
                    <BodyTableCell>80</BodyTableCell>
                    <BodyTableCell>$40.00</BodyTableCell>
                    <BodyTableCell>$3200.00</BodyTableCell>
                  </TableRow>

                  <TableRow>
                    <BodyTableCell>Logo Design</BodyTableCell>
                    <BodyTableCell>32</BodyTableCell>
                    <BodyTableCell>$50.00</BodyTableCell>
                    <BodyTableCell>$2200.00</BodyTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Scrollbar>

            <Divider />

            <Stack mt={3} spacing={1} maxWidth={200} marginLeft="auto">
              <FlexBetween>
                <Paragraph fontWeight={500}>Subtotal:</Paragraph>
                <Paragraph fontWeight={500}>{currency(20600.0)}</Paragraph>
              </FlexBetween>

              <FlexBetween>
                <Paragraph fontWeight={500}>Vat 0%:</Paragraph>
                <Paragraph fontWeight={500}>$ 00.00</Paragraph>
              </FlexBetween>

              <FlexBetween>
                <Paragraph fontWeight={500}>Sub total 0%:</Paragraph>
                <Paragraph fontWeight={500}>{currency(20600.0)}</Paragraph>
              </FlexBetween>

              <FlexBetween>
                <Paragraph fontWeight={500}>Total:</Paragraph>
                <Paragraph fontWeight={500}>{currency(20600.0)}</Paragraph>
              </FlexBetween>
            </Stack>

            <Stack direction="row" justifyContent="flex-end" mt={4} spacing={2}>
              <Button variant="outlined" color="secondary" startIcon={<DownloadTo />}>
                PDF
              </Button>

              <Button>Print Invoice</Button>
            </Stack>
          </Grid>

          <Grid size={{
          md: 5,
          xs: 12
        }}>
            <StyledBox>
              <Stack spacing={2} direction="row" alignItems="center">
                <Chip size="small" color="success" label="Approved" />
                <Chip size="small" label="Pending Payment" />
              </Stack>

              <Stack mt={3} spacing={2}>
                <H6 fontSize={16}>Payment Details:</H6>

                <ListItem text="Paypal:" description="UI.lib@gmail.com" />
                <ListItem text="Account:" description="Nl24IBAN34553477847370033 AMB NLANBZTC" />
                <ListItem text="Payment Term:" description="14 Days . Due in 7 days" />
              </Stack>

              <Stack mt={3} spacing={2}>
                <H6 fontSize={16}>Payment Overview:</H6>

                <ListItem text="Project Name:" description={<>
                      UI Lib Dashboard <Link href="#">View Project</Link>
                    </>} />
                <ListItem text="Completed By:" description="UI.lib" />
                <ListItem text="Time Spent:" description="120 Hours . 20$ / h rate" />
              </Stack>
            </StyledBox>
          </Grid>
        </Grid>
      </Card>
    </div>;
} // ==============================================================

function ListItem({
  text,
  description
}) {
  return <Paragraph color="text.secondary">
      {text} <br />
      <Span fontWeight={500} color="text.primary">
        {description}
      </Span>
    </Paragraph>;
}