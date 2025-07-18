import Grid from '@mui/material/Grid2'; // CUSTOM PAGE SECTION COMPONENTS

import Footer from '../../_common/Footer';
import Cards from '../Cards';
import TodoList from '../TodoList';
import DealType from '../DealType';
import MostLeads from '../MostLeads';
import DealStatus from '../DealStatus';
import RecentLeads from '../RecentLeads';
import ChartFilters from '../ChartFilters';
import DealForecast from '../DealForecast';
import SalesForecast from '../SalesForecast';
import AvgCallDuration from '../AvgCallDuration';
export default function CrmPageView() {
  return <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        {
        /* CAMPAIGN SENT, AVERAGE DEALS, ANNUAL PROFIT CARD */
      }
        <Grid size={12}>
          <Cards />
        </Grid>

        {
        /* CHART FILTER CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <ChartFilters />
        </Grid>

        {
        /* MOST LEADS CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <MostLeads />
        </Grid>

        {
        /* DEAL STATUS CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <DealStatus />
        </Grid>

        {
        /* DEAL TYPE CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <DealType />
        </Grid>

        {
        /* AVERAGE CALL DURATION CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <AvgCallDuration />
        </Grid>

        {
        /* TOP PRODUCTS CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <SalesForecast />
        </Grid>

        {
        /* DEAL FORECAST CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <DealForecast />
        </Grid>

        {
        /* RECENT LEADS CARD */
      }
        <Grid size={{
        md: 8,
        xs: 12
      }}>
          <RecentLeads />
        </Grid>

        {
        /* TODO LIST CARD */
      }
        <Grid size={{
        md: 4,
        xs: 12
      }}>
          <TodoList />
        </Grid>

        {
        /* FOOTER CARD */
      }
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>;
}