import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import { nanoid } from 'nanoid';
import { format } from 'date-fns'; // CUSTOM COMPONENTS

import Scrollbar from '@/components/scrollbar';
import MoreButton from '@/components/more-button';
import { Paragraph, Small } from '@/components/typography';
import { FlexBetween, FlexBox } from '@/components/flexbox'; // COMMON DASHBOARD RELATED COMPONENTS

import { BodyTableCell, HeadTableCell } from '../_common'; // CUSTOM DUMMY DATA SET

const DATA = [{
  id: nanoid(),
  total: 356.25,
  createdAt: new Date('August 31, 2022 10:30:00'),
  user: {
    id: nanoid(),
    name: 'Arikunn',
    image: '/static/thumbnail/1.png'
  }
}, {
  id: nanoid(),
  total: 165.58,
  createdAt: new Date('August 30, 2022 13:30:00'),
  user: {
    id: nanoid(),
    name: 'Ikauwis',
    image: '/static/thumbnail/2.png'
  }
}, {
  id: nanoid(),
  total: 463.25,
  createdAt: new Date('August 29, 2022 19:30:00'),
  user: {
    id: nanoid(),
    name: 'Dayet',
    image: '/static/thumbnail/3.png'
  }
}];
export default function ExpenseHistory() {
  return <Card className="h-full">
      <FlexBetween p={3}>
        <div>
          <Paragraph fontSize={18} fontWeight={500}>
            Expanse History
          </Paragraph>
          <Paragraph color="text.secondary">Top 7 Countries</Paragraph>
        </div>

        <MoreButton size="small" />
      </FlexBetween>

      <Scrollbar>
        <Table sx={{
        minWidth: 500
      }}>
          <TableHead>
            <TableRow>
              <HeadTableCell>NAME</HeadTableCell>
              <HeadTableCell>CREATED DATE</HeadTableCell>
              <HeadTableCell>AMOUNT</HeadTableCell>
              <HeadTableCell>ACTION</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {DATA.map((item, index) => <TableRow key={index}>
                <BodyTableCell>
                  <FlexBox gap={1}>
                    <Avatar variant="rounded" src={item.user.image} />
                    <div>
                      <Paragraph color="text.primary" fontWeight={500}>
                        {item.user.name}
                      </Paragraph>
                      <Small>{item.user.id.substring(0, 10)}</Small>
                    </div>
                  </FlexBox>
                </BodyTableCell>

                <BodyTableCell>{format(new Date(item.createdAt), 'dd MMM, yyyy')}</BodyTableCell>

                <BodyTableCell>
                  <Paragraph color="text.primary" fontWeight={500}>
                    ${item.total}
                  </Paragraph>
                </BodyTableCell>

                <BodyTableCell>
                  <MoreButton />
                </BodyTableCell>
              </TableRow>)}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>;
}