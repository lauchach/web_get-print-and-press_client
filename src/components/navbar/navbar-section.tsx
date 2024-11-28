/* eslint-disable @next/next/no-img-element */
'use client';

import { FACEBOOK_LINK, LINE_LINK, YOUTUBE_LINK } from '@/constant/message/info/message';
import { navigations } from '@/constant/message/navbar/message';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DrawerList from './navbar-drawer';
import NavbarMenuList from './navbar-menu-list';

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    white?: true;
  }
}

export default function NavbarSection() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ py: 0.5, borderBottom: 1, borderColor: 'black.main' }}
      color="white"
    >
      <CssBaseline />
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            display={'flex'}
            alignItems={{ xs: 'center', lg: 'flex-end' }}
            justifyContent={'space-between'}
            width={'100%'}
            px={{ xs: 0, xl: 12 }}
          >
            <Box display={'flex'} alignItems={'end'} gap={2}>
              <Link href="/">
                <Box
                  position={'relative'}
                  width={{ xs: 90, lg: 147 }}
                  height={{ xs: 62, lg: 84 }}
                  sx={{
                    display: {
                      xs: 'flex',
                    },
                  }}
                >
                  <Image
                    src={'/images/logo-blue.png'}
                    alt="logo"
                    fill
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 5 }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  flex: 1,
                  display: {
                    xs: 'none',
                    lg: 'flex',
                  },
                  flexWrap: 'wrap-reverse',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}
                gap={2}
              >
                {navigations.slice(0, -2).map((nav, index) => {
                  if (index === navigations.length - 3) {
                    return <NavbarMenuList key={index} name={nav.name} />;
                  } else {
                    return (
                      <Button
                        key={index}
                        sx={{
                          display: 'block',
                          fontWeight: 400,
                          fontSize: { xs: 18 },
                          pb: 0,
                          color: 'black.main',
                        }}
                        onClick={() => router.push(nav.path)}
                      >
                        {nav.name}
                      </Button>
                    );
                  }
                })}

                <Box sx={{ marginLeft: 'auto' }} display={'flex'}>
                  <Button
                    key={navigations.length - 2}
                    sx={{
                      display: 'block',
                      fontWeight: 400,
                      fontSize: { xs: 18 },
                      pb: 0,
                      color: 'black.main',
                    }}
                    onClick={() => router.push(navigations[navigations.length - 2].path)}
                  >
                    {navigations[navigations.length - 2].name}
                  </Button>
                  <Button
                    key={navigations.length - 1}
                    sx={{
                      display: 'block',
                      fontWeight: 400,
                      fontSize: { xs: 18 },
                      pb: 0,
                      color: 'black.main',
                    }}
                    onClick={() => router.push(navigations[navigations.length - 1].path)}
                  >
                    {navigations[navigations.length - 1].name}
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu list"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="secondary"
                sx={{ bgColor: 'blue' }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                open={open}
                anchor={'right'}
                onClose={toggleDrawer(false)}
                sx={{ bgColor: 'blue' }}
              >
                <DrawerList toggleDrawer={toggleDrawer} />
              </Drawer>
            </Box>
            <Box
              display={{ xs: 'none', lg: 'flex' }}
              flexDirection={'column'}
              alignItems={'start'}
              gap={1}
              sx={{
                textDecoration: 'none',
              }}
              pl={2}
              mb={1}
            >
              <Link href={'/aboutus'} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  color={'black.main'}
                  fontSize={{ xs: 18 }}
                  sx={{
                    px: 0.5,
                    fontWeight: 400,
                  }}
                >
                  ติดต่อเรา
                </Typography>
              </Link>

              <Stack direction="row">
                <IconButton
                  color="primary"
                  aria-label="facebook"
                  sx={{ width: 30, height: 30 }}
                  onClick={() => router.push(FACEBOOK_LINK)}
                >
                  <FacebookIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  aria-label="line"
                  color="primary"
                  sx={{ width: 30, height: 30 }}
                  onClick={() => router.push(LINE_LINK)}
                >
                  <img
                    src="/images/line.png"
                    width="29"
                    height="29"
                    alt="Bulb"
                    style={{ padding: 4 }}
                  />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="mail"
                  sx={{ width: 30, height: 30 }}
                  onClick={() => router.push(YOUTUBE_LINK)}
                >
                  <EmailIcon fontSize="medium" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
