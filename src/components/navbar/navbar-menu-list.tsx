'use client';

import { URL_PRODUCT } from '@/constant/url/url';
import { combineProductData } from '@/hook/combine-product';
import { requestGet } from '@/utils/request';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Loading from '../common/loading';

type Props = {
  name: string;
};

export type MenuListProps = {
  id: number;
  title: string;
};

const NavbarMenuList = (props: Props) => {
  const { name } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuList, setMenuList] = useState<MenuListProps[] | never[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  const handleRoute = (id: number) => {
    router.push(`/product/${id}`);
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  const requestProduct = async () => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        sx={{
          display: 'block',
          fontWeight: 400,
          fontSize: { xs: 18 },
          pb: 0,
          color: 'black.main',
        }}
        onClick={handleToggle}
      >
        {name}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <>
                      {menuList.map((menu) => {
                        return (
                          <MenuItem
                            key={`${menu.title} - ${menu.id}`}
                            onClick={() => handleRoute(menu.id)}
                          >
                            {menu.title}
                          </MenuItem>
                        );
                      })}
                    </>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default NavbarMenuList;
