'use client';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';

import Image from 'next/image';

const HowToOrder = (props: {
  isShowHowTo: boolean,
  showHowToTop: number,
  showHowToDown: number,

  isShowProcessBuy: boolean,
  showProcessBuyTop: number,
  showProcessBuyDown: number,
}) => {
  const lgDown = useMediaQuery('(max-width:1024px)');
  return (
    <Box p={2} maxWidth="lg" mx="auto">

      {props.isShowHowTo ?
        <div style={{ paddingTop: props.showHowToTop, paddingBottom: props.showHowToDown }}>
          <Grid container spacing={0} justifyContent="center" alignItems="center" color="#353c97" sx={{ my: 5 }}>
            <Grid item>
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '1.3rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 'normal',
                  display: 'inline',
                  '@media (max-width: 768px)': {
                    fontSize: '1.2rem',
                  },
                }}
              >
                วิธีสั่งงานง่ายๆกับ
              </Typography>
            </Grid>

            <Grid item display="flex" alignItems="center">
              <Box ml={2}>
                <Image
                  src="/images/logo-blue-1.png"
                  alt="GET PRINT Logo"
                  width={220}
                  height={125}
                  sizes="(max-width: 768px) 90px, (max-width: 1024px) 150px, 200px"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 4, md: 8 }} justifyContent="center" alignItems="center">
            {/* ขั้นตอนที่ 1 */}
            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <div className='gridez'>
                <Box
                  className="circle-box"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  bgcolor="#f7f7f7"
                  borderRadius="50%"
                  boxShadow="0px 6px 15px rgba(0, 0, 0, 0.2)"
                  sx={{
                    width: { xs: 250, md: 300 }, // ลดขนาดลงจากเดิม
                    height: { xs: 250, md: 300 }, // ลดขนาดลงจากเดิม
                    padding: '20px',
                    margin: { xs: '16px 0', md: '32px' },
                  }}
                >


                  <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={2}>
                      <Typography
                        className="step-number"
                        color="#f7d737"
                        sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 'bold' }} // ลดขนาดลงเล็กน้อย
                      >
                        1
                      </Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="left">
                        <Typography
                          variant='h3'
                          className="step-text"
                          sx={{ fontSize: { xs: '0.9rem', md: '1.3rem' }, fontWeight: 'bold', marginBottom: '4', marginRight: '20px' }} // ลดขนาดลงเล็กน้อย
                          gutterBottom
                        >
                          ส่งรายละเอียดงาน-<br />สอบถามงานตรงตามความต้องการ
                        </Typography>
                        <Grid container justifyContent="center" alignItems="center">
                          <Grid item xs={6} display="flex" justifyContent="center">
                            <Image src="/images/icon/icon8.webp" alt="LINE Icon" width={300} height={300} style={{ maxWidth: '100%', height: 'auto' }} />
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              color="primary"
                              fontSize="14px"
                              sx={{ fontSize: { xs: '10px', md: '14px' } }} // ลดขนาดลงเล็กน้อย
                            >
                              เพื่อ ติดต่อสอบถามงานที่ลูกค้าสนใจ
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>

            {/* ขั้นตอนที่ 2 */}
            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <div className='gridez'>
                <Box
                  className="circle-box"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  bgcolor="#f7f7f7"
                  borderRadius="50%"
                  boxShadow="0px 6px 15px rgba(0, 0, 0, 0.2)"
                  sx={{
                    width: { xs: 250, md: 300 }, // ลดขนาดลงจากเดิม
                    height: { xs: 250, md: 300 }, // ลดขนาดลงจากเดิม
                    padding: '20px',
                    margin: { xs: '16px 0', md: '32px' },
                  }}
                >
                  <Grid container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item xs={2}>
                      <Typography
                        className="step-number"
                        color="#f7d737"
                        sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 'bold' }} // ลดขนาดลงเล็กน้อย
                      >
                        2
                      </Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="left">
                        <Typography
                          variant='h3'
                          className="step-text"
                          sx={{ fontSize: { xs: '0.9rem', md: '1.3rem' }, fontWeight: 'bold', marginBottom: '4', marginRight: '20px' }} // ลดขนาดลงเล็กน้อย
                          gutterBottom
                        >
                          ยืนยันใบเสนอราคา/<br />ส่ง PO สั่งซื้อ
                        </Typography>
                        <Typography
                          color="primary"
                          fontSize="14px"
                          sx={{ fontSize: { xs: '10px', md: '14px' } }} // ลดขนาดลงเล็กน้อย
                        >
                          <span>- บริษัทฯ ส่งใบเสนอราคาให้ลูกค้า</span><br />
                          <span>- ลูกค้าเซ็นยืนยันราคา+หลักฐานการชำระเงิน</span><br />
                          <span>- ลูกค้ายืนยันบรู๊ฟแบบเพื่อสั่งผลิต</span>
                        </Typography>
                        <Grid item xs={10} display="flex" justifyContent="center">
                          <Image src="/images/icon/po.webp" alt="Icon PO" width={58} height={80} style={{ maxWidth: '100%', height: 'auto', marginRight: '35px' }} />
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>

            {/* ขั้นตอนที่ 3 */}
            <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
              <div className='gridez'>
                <Box
                  className="circle-box"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  bgcolor="#f7f7f7"
                  borderRadius="50%"
                  boxShadow="0px 6px 15px rgba(0, 0, 0, 0.2)"
                  sx={{
                    width: { xs: 250, md: 300 }, // ลดขนาดลงจากเดิม
                    height: { xs: 250, md: 300 }, // ลดขนาดลงจากเดิม
                    padding: '20px',
                    margin: { xs: '16px 0', md: '32px' },
                  }}
                >
                  <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={2}>
                      <Typography
                        className="step-number"
                        color="#f7d737"
                        sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 'bold' }} // ลดขนาดลงเล็กน้อย
                      >
                        3
                      </Typography>
                    </Grid>

                    <Grid item xs={10}>
                      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="left">
                        <Typography
                          variant='h3'
                          color="primary"
                          fontSize="14px"
                          sx={{ fontSize: { xs: '10px', md: '14px' } }} // ลดขนาดลงเล็กน้อย
                        >
                          การจัดส่งงาน
                        </Typography>
                        <Grid container justifyContent="center" alignItems="center" spacing={2}>
                          <Grid item xs={7} display="flex" justifyContent="center">
                            <Image src="/images/icon/shipping.webp" alt="shipping Icon" width={200} height={133} style={{ maxWidth: '100%', height: 'auto' }} />
                          </Grid>
                          <Grid item xs={5}>
                            <Typography
                              color="primary"
                              fontSize="14px"
                              sx={{ fontSize: { xs: '10px', md: '14px' } }} // ลดขนาดลงเล็กน้อย
                            >
                              ทางบริษัทฯ<br />แจ้งวันจัดส่งให้ลูกค้าทราบ
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
        : []
      }

      {props.isShowProcessBuy ?
        <div style={{ paddingTop: props.showProcessBuyTop, paddingBottom: props.showProcessBuyDown }}>
          <Grid container spacing={0} justifyContent="center" alignItems="center" color="#353c97" sx={{ my: 5 }}>
            <Grid item>
              <Typography variant='h2' sx={{ fontSize: { xs: '1.6rem', sm: '3rem', md: '4.5rem' }, fontWeight: 'normal', display: 'inline' }}>
                ข้อดี
              </Typography>
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '1.2rem', sm: '2.5rem', md: '3.5rem' },
                  fontWeight: 'normal',
                  display: 'inline',
                  marginLeft: '2px',
                }}
              >
                สั่งงานกับ
              </Typography>
            </Grid>

            {/* โลโก้ Get Print */}
            <Grid item display="flex" alignItems="center">
              <Box ml={2}>
                <Image
                  src="/images/logo-blue-1.png"
                  alt="GET PRINT Logo"
                  width={220}
                  height={125}
                  sizes="(max-width: 768px) 90px, (max-width: 1024px) 150px, 200px"
                // style={{
                //   width: '100%',
                //   height: 'auto',
                // }}
                />
              </Box>
            </Grid>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '1.2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 'normal',
                marginLeft: '10px',
              }}
            >
              ดียังไง
            </Typography>
          </Grid>

          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {/* ข้อดีที่ 1 */}
            <Grid item xs={12} display="flex" justifyContent="center">
              <Grid container alignItems="stretch">
                {/* คอลัมน์ที่ 1: ตัวเลข พื้นหลังสี #353c97 */}
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#353c97"
                    height="100%"
                    p={2}
                  >
                    <Typography sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, fontWeight: 'bold', color: '#fff' }}>
                      1
                    </Typography>
                  </Box>
                </Grid>

                {/* คอลัมน์ที่ 2: ไอคอน พื้นหลังสี #f4f538 */}
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#f4f538"
                    height="100%"
                    p={2}
                  >
                    <Image src="/images/icon/icon1.webp" alt="Icon 1" width={250} height={165} style={{ width: '80%', height: 'auto' }} />
                  </Box>
                </Grid>

                {/* คอลัมน์ที่ 3: ข้อความ พื้นหลังสี #e6e6e6 */}
                <Grid item xs={7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#e6e6e6"
                    height="100%"
                    p={2}
                  >
                    <Typography variant="h3" sx={{ fontSize: { xs: '1rem', sm: '2.3rem', md: '2.8rem' }, fontWeight: 500, color: '#353c97', textAlign: 'center', paddingBottom: '2px' }}>
                      มีสินค้าหลากหลาย
                      <Typography
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1.5rem', md: '2rem' },
                          fontWeight: 'normal',
                          color: '#353c97',
                          textAlign: 'left',
                          width: '100%',
                          paddingLeft: '40px',
                          paddingRight: '40px',
                          paddingTop: '10px',
                          '@media (max-width: 768px)': {
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '8px',
                          },
                        }}>

                        เรามีผลิตสื่อส่งเสริมการขายที่หลากหลายลูกค้าสามารถสั่งจบในที่เดียว
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* ข้อดีที่ 2 */}
            <Grid item xs={12} display="flex" justifyContent="center">
              <Grid container alignItems="stretch">
                {/* คอลัมน์ที่ 1: ตัวเลข พื้นหลังสี #353c97 */}
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#353c97"
                    height="100%"
                    p={2}
                  >
                    <Typography sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, fontWeight: 'bold', color: '#fff' }}>
                      2
                    </Typography>
                  </Box>
                </Grid>

                {/* คอลัมน์ที่ 2: ไอคอน พื้นหลังสี #f4f538 */}
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#f4f538"
                    height="100%"
                    p={2}
                  >
                    <Image src="/images/icon/icon2.webp" alt="Icon 2" width={250} height={222} style={{ width: '80%', height: 'auto' }} />
                  </Box>
                </Grid>

                {/* คอลัมน์ที่ 3: ข้อความ พื้นหลังสี #e6e6e6 */}
                <Grid item xs={7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#e6e6e6"
                    height="100%"
                    p={2}
                  >
                    <Typography variant="h3" sx={{ fontSize: { xs: '1rem', sm: '2.3rem', md: '2.8rem' }, fontWeight: 500, color: '#353c97', textAlign: 'center', paddingBottom: '2px' }}>
                      ง่ายต่อการสั่งซ้ำ
                      <Typography
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1.5rem', md: '2rem' },
                          fontWeight: 'normal',
                          color: '#353c97',
                          textAlign: 'left',
                          width: '100%',
                          paddingLeft: '40px',
                          paddingRight: '40px',
                          paddingTop: '10px',
                          '@media (max-width: 768px)': {
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '8px',
                          },
                        }}>
                        ทางบริษัทฯจะทำการเก็บไฟล์งานลูกค้าและตัวอย่างงานเก่า อย่างน้อย 2 ปีเพื่อสามารถทำซ้ำได้อย่างรวดเร็ว
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* ข้อดีที่ 3 */}
            <Grid item xs={12} display="flex" justifyContent="center">
              <Grid container alignItems="stretch">
                {/* คอลัมน์ที่ 1: ตัวเลข พื้นหลังสี #353c97 */}
                <Grid item xs={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#353c97"
                    height="100%"
                    p={2}
                  >
                    <Typography sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, fontWeight: 'bold', color: '#fff' }}>
                      3
                    </Typography>
                  </Box>
                </Grid>

                {/* คอลัมน์ที่ 2: ไอคอน พื้นหลังสี #f4f538 */}
                <Grid item xs={3}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#f4f538"
                    height="100%"
                    p={2}
                  >
                    <Image src="/images/icon/icon3.webp" alt="Icon 3" width={250} height={136} style={{ width: '80%', height: 'auto' }} />
                  </Box>
                </Grid>

                {/* คอลัมน์ที่ 3: ข้อความ พื้นหลังสี #e6e6e6 */}
                <Grid item xs={7}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#e6e6e6"
                    height="100%"
                    p={2}
                  >
                    <Typography variant="h3" sx={{ fontSize: { xs: '1rem', sm: '2.3rem', md: '2.8rem' }, fontWeight: 500, color: '#353c97', textAlign: 'center', paddingBottom: '2px' }}>
                      มีคุณภาพ/ตรงเวลา
                      <Typography
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1.5rem', md: '2rem' },
                          fontWeight: 'normal',
                          color: '#353c97',
                          textAlign: 'left',
                          width: '100%',
                          paddingLeft: '40px',
                          paddingRight: '40px',
                          paddingTop: '10px',
                          '@media (max-width: 768px)': {
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '8px',
                          },
                        }}>
                        ทางเราใช้เครื่องพิมพ์ที่มีคุณภาพและทันสมัย และมีทีมงานผลิต ที่มีประสบการณ์ในการทำงาน
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        : []
      }

    </Box>
  );
};

export default HowToOrder;