import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

type FooterListProps = {
  title: string;
  lists: { name: string; link: string }[];
};

const FooterList = ({ title, lists }: FooterListProps) => (
  <List sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex', flexDirection: 'column', p: 0 }}>
    <ListItem sx={{ p: 0 }}>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          color: 'background.default',
          fontSize: { xs: 14 },
        }}
      />
    </ListItem>
    {lists.map((item) => (
      <Link key={item.name} href={item.link} style={{ textDecoration: 'none' }}>
        <ListItem sx={{ p: 0 }}>
          <ListItemText
            primary={item.name}
            primaryTypographyProps={{
              color: 'background.default',
              fontSize: { xs: 12 },
            }}
          />
        </ListItem>
      </Link>
    ))}
  </List>
);

export default FooterList;
