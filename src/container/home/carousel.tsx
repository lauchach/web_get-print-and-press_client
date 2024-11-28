'use client';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { Carousel, Image } from 'antd';
import { useEffect, useState } from 'react';
import { IBannaerProps } from './banner-section';

type Props = {
  imageLists: IBannaerProps[];
};

const NextArrow = (props: { className?: any; style?: any; onClick?: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'black',
        borderRadius: '50%',
        width: 60,
        height: 60,
        opacity: 1,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <ArrowForwardIosRoundedIcon fontSize="large" sx={{ color: 'white.main' }} />
    </div>
  );
};

const PrevArrow = (props: { className?: any; style?: any; onClick?: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'black',
        borderRadius: '50%',
        width: 60,
        height: 60,
        opacity: 1,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewRoundedIcon fontSize="large" sx={{ color: 'white.main' }} />
    </div>
  );
};

const CarouselSection = (props: Props) => {
  const { imageLists } = props;

  const lgDown = useMediaQuery('(max-width:1024px)');
  const [slideIndex, setSlideIndex] = useState<number>(1);

  const handleAfterChange = (current: number) => {
    setSlideIndex(current + 1);
  };

  const setting = {
    arrows: true,
    nextArrow: lgDown ? undefined : <NextArrow />,
    prevArrow: lgDown ? undefined : <PrevArrow />,
    infinite: true,
    centerMode: lgDown ? false : true,
    autoplay: true,
    dots: false,
    centerPadding: lgDown ? '0px' : '200px',
    draggable: true,
    className: 'custom-carousel',
    afterChange: handleAfterChange,
  };

  let [loading, setLoading] = useState(false)
  setTimeout(() => {
    setLoading(true)
  }, 500)

  useEffect(() => {

  }, [loading])

  return (
    <>
      {loading ?
        <Box minHeight={150}>
          <Carousel {...setting}>
            {imageLists?.map((res: IBannaerProps) => {
              return (
                <Box component={'div'} key={res.id}>
                  <Image
                    alt={res.title}
                    src={res.BannerImage.googleImage}
                    preview={false}
                    style={{ padding: lgDown ? '0 0' : '0 10px', verticalAlign: 'middle' }}
                    width={'100%'}
                    height={'auto'}
                  // placeholder={<Loading />}
                  />
                </Box>
              );
            })}
          </Carousel>

          <Typography
            variant="body1"
            color="primary.main"
            align="center"
            fontSize={{ xs: 14, sm: 16, md: 18, lg: 20 }}
            width={'100%'}
            py={1}
            display={'inline-flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <ArrowBackIosRoundedIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }} />
            {slideIndex + ' / ' + imageLists.length}
            <ArrowForwardIosRoundedIcon sx={{ fontSize: { xs: 14, sm: 16, md: 18, lg: 20 } }} />
          </Typography>
        </Box>
        : []
      }
    </>
  );
};

export default CarouselSection;
