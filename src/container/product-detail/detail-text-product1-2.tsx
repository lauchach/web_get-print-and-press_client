import { Box, Grid, Typography } from '@mui/material';

type Props = {};

const DetailTextProduct1Part2 = (props: Props) => {
    return (
        <Grid item xs={12} display={'flex'} flexDirection={'column'} gap={4}>
            <Box>
                <Typography
                    variant="h2"
                    fontSize={'1.625rem'}
                    sx={{
                        textWrap: 'balance',
                    }}
                    color={'primary.main'}
                    fontWeight={500}
                    mb={1}
                >
                    ความแตกต่างป้ายโรลอัพแบบมาตรฐาน และ แบบหยดน้ำ
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="h3"
                    fontSize={'1.625rem'}
                    sx={{
                        textWrap: 'balance',
                    }}
                    color={'primary.main'}
                    fontWeight={500}
                    mb={1}
                >
                    ป้ายโรลอัพแบบมาตรฐาน
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    ป้ายโรลอัพแบบมาตรฐาน ราคาถูกใช้งบประมาณน้อย เหมาะกับงานแสดงโชว์ งานประชุม
                    หรืออีเว้นท์ที่มีระยะเวลาจัดบูธจำกัด เนื่องจากติดตั้งง่ายเคลื่อนย้ายได้เร็ว น้ำหนักเบา
                    การเลือกพิจารณาใช้ป้ายโรลอัพแบบมาตรฐานควรมองในเรื่องของงบประมาณ
                    ความเร่งด่วนการใช้งานโปรโมทสินค้าเป็นต้น
                </Typography>
            </Box>

            <Box>
                <Typography
                    variant="h3"
                    fontSize={'1.625rem'}
                    sx={{
                        textWrap: 'balance',
                    }}
                    color={'primary.main'}
                    fontWeight={500}
                    mb={1}
                >
                    ป้ายโรลอัพแบบหยดน้ำหรือพรีเมี่ยม
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    ป้ายโรลอัพแบบหยดน้ำหรือพรีเมี่ยม ลักษณะของฐานจะสวยงาม ดูหรูหรากว่าแบบมาตราฐาน
                    มีการเคลือบผิวด้วยโครเมียม ทำให้เพิ่มความมันวาว
                    แข็งแรงเหมาะสำหรับการโปรโมทสินค้าที่เน้นความหรูหรา ดึงดูดสายตาและความโดดเด่นจากผู้คน
                    การเลือกพิจารณาใช้ป้ายโรลอัพแบบหยดน้ำควรมองถึงเรื่องสินค้าที่จะโปรโมท การดีไซน์
                    บรรยากาศภายในงาน ความสวยงาม เป็นต้น
                </Typography>
            </Box>
        </Grid>
    );
};

export default DetailTextProduct1Part2;
