/* eslint-disable @next/next/no-img-element */
'use client';

import { FACEBOOK_LINK, LINE_LINK, YOUTUBE_LINK } from '@/constant/message/info/message';
import { navigations } from '@/constant/message/navbar/message';
import { URL_PRODUCT } from '@/constant/url/url';
import { combineProductData } from '@/hook/combine-product';
import { requestGet } from '@/utils/request';
import { KeyboardArrowDown } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { MenuListProps } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
  toggleDrawer: (open: boolean) => () => void;
};

const DrawerList = (props: Props) => {
  const { toggleDrawer } = props;
  const router = useRouter();
  const [menuList, setMenuList] = useState<MenuListProps[] | never[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const requestProduct = async () => {
    try {
      const productExists = [1, 2, 4, 6, 9];
      const response = await requestGet(URL_PRODUCT);
      if (!response.status || response.result.length < 1) {
        return null;
      }
      const list = combineProductData(
        response.result.productPackage,
        response.result.productEvent,
        response.result.productShop
      );
      const filterList = list.filter((item) => !productExists.includes(item.id));
      setMenuList(filterList);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <Box
      sx={{ width: 250 }}
      bgcolor={'white.main'}
      display={'flex'}
      flexDirection={'column'}
      height={'100%'}
      justifyContent={'space-between'}
    >
      <List>
        {navigations.map((nav, index) => {
          if (index == navigations.length - 3) {
            return (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemText
                      primary={nav.name}
                      sx={{ color: 'background.default' }}
                      primaryTypographyProps={{ fontWeight: 700 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 100,
                        transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                {open &&
                  menuList.map((item) => (
                    <ListItem
                      key={`${item.title} - ${item.id}`}
                      disablePadding
                      sx={{ ml: 1 }}
                      onClick={() => {
                        router.push(`/product/${item.id}`);
                        toggleDrawer(false)();
                      }}
                    >
                      <ListItemButton>
                        <ListItemText
                          primary={item.title}
                          sx={{ color: 'background.default' }}
                          primaryTypographyProps={{ fontWeight: 700 }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
              </>
            );
          } else {
            return (
              <ListItem
                key={index}
                disablePadding
                onClick={() => {
                  router.push(nav.path);
                  toggleDrawer(false)();
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary={nav.name}
                    sx={{ color: 'background.default' }}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'start'}
        sx={{
          textDecoration: 'none',
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          noWrap
          component="div"
          color={'background.default'}
          fontSize={{ xs: 18 }}
          onClick={() => router.push('/aboutus')}
          sx={{
            px: 0.5,
            fontWeight: 700,
          }}
        >
          ติดต่อเรา
        </Typography>
        <Stack direction="row">
          <IconButton
            color="primary"
            aria-label="facebook"
            sx={{ width: 29, height: 29 }}
            onClick={() => router.push(FACEBOOK_LINK)}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="line"
            color="primary"
            sx={{ width: 29, height: 29 }}
            onClick={() => router.push(LINE_LINK)}
          >
            <img src="/images/line.png" width="29" height="29" alt="Line" style={{ padding: 4 }} />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="mail"
            sx={{ width: 29, height: 29 }}
            onClick={() => router.push(YOUTUBE_LINK)}
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default DrawerList;
