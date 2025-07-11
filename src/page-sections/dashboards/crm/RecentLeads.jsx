import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { nanoid } from 'nanoid'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import MoreButton from '@/components/more-button';
import StatusBadge from '@/components/status-badge';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // CUSTOM UTILS METHOD

import { currency } from '@/utils/currency'; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from '../_common'; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  status: 'Won Lead',
  status_type: 'success',
  email: 'astole@gmail.com',
  user: {
    name: 'Astole Banne',
    balance: 25360.0,
    image: '/static/user/user-11.png'
  }
}, {
  id: nanoid(),
  status: 'Cold Lead',
  status_type: 'warning',
  email: 'taslon@gmail.com',
  user: {
    name: 'Taslon Abela',
    balance: 25360.0,
    image: '/static/user/user-17.png'
  }
}, {
  id: nanoid(),
  status: 'New Lead',
  status_type: 'error',
  email: 'tofan@gmail.com',
  user: {
    name: 'Tofan Andy',
    balance: 25360.0,
    image: '/static/user/user-18.png'
  }
}];
export default function RecentLeads() {
  return <Card className="h-full">
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          Recent Leads
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 600
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>NAME</HeadTableCell>
              <HeadTableCell>EMAIL OR PHONE</HeadTableCell>
              <HeadTableCell>STATUS</HeadTableCell>
              <HeadTableCell>ACTION</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map(({
            id,
            status,
            user,
            email,
            status_type
          }) => <TableRow key={id}>
                <BodyTableCell>
                  <FlexBox gap={2}>
                    <Avatar src={user.image} />

                    <div>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {user.name}
                      </Paragraph>

                      <Small>{currency(user.balance)}</Small>
                    </div>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>
                  <Paragraph color="text.primary" fontWeight={500}>
                    {email}
                  </Paragraph>
                </BodyTableCell>

                <BodyTableCell>
                  <StatusBadge type={status_type}>{status}</StatusBadge>
                </BodyTableCell>

                <BodyTableCell>
                  <MoreButton size="small" />
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}