import StarIcon from '@mui/icons-material/Star';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

type Props = {};

const DetailTextProduct1Part1 = (props: Props) => {
    const list = [
        {
            title: 'ประโยชน์ป้ายโรลอัพ',
            list: [
                'ใช้สำหรับตกแต่งบูธ แสดงสินค้า โปรโมชั่น เพิ่มความโดดเด่น',
                'ดึงดูดความน่าสนใจ เพิ่มภาพจำให้กับแบรนด์สินค้า',
                'ใช้งานได้ทุกโอกาสไม่ว่าจะเป็นการประชุม สัมมนา อีเว้นท์หรือวางหน้าร้าน',
                'ประหยัดค่าใช้จ่าย สามารถนำกลับมาใช้งานต่อได้หลายครั้ง เนื้อผ้าไม่ขาด ชำรุด',
            ],
            numberList: true,
        },
        {
            title: 'ราคาทำป้ายโรลอัพแบบมาตราฐาน',
            list: [
                'ขนาด 60 x 160 ซม. ราคา 750 บาท',
                'ขนาด 80 x 200 ซม. ราคา 950 บาท',
                'ขนาด 85 x 200 ซม. ราคา 980 บาท',
                'ขนาด 100 x 200 ซม. ราคา 1,350 บาท',
                'ขนาด 120 x 200 ซม. ราคา 1,650 บาท',
            ],
            numberList: false,
        },
        {
            title: 'ราคาทำป้ายโรลอัพแบบคุณภาพเรียบหรู(พรีเมียม)',
            list: ['ขนาด 80 x 200 ซม. ราคา 2,800 บาท', 'ขนาด 88 x 200 ซม. ราคา 2,950 บาท'],
            numberList: false,
        },
        {
            title: 'ราคาทำป้ายโรลอัพแบบมาตราฐาน 2 ด้าน',
            list: ['ขนาด 80 x 200 ซม. ราคา 2,800 บาท'],
            numberList: false,
        },
    ];

    return (
        <Grid item xs={12} display={'flex'} flexDirection={'column'} gap={4} >
            {list.map((field, index) => {
                return (
                    <Box key={index}>
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
                            {field.title}
                        </Typography>
                        {field.numberList ? (
                            <List sx={{ width: 'fit-content', listStyle: 'decimal', pl: 2 }}>
                                {field.list.map((item, indexList) => {
                                    return (
                                        <ListItem
                                            key={indexList}
                                            sx={{
                                                display: 'list-item',
                                                color: 'primary.main',
                                                fontSize: '1.125rem',
                                                px: 0,
                                            }}
                                        >
                                            <ListItemText
                                                primary={item}
                                                primaryTypographyProps={{
                                                    color: 'primary.main',
                                                    fontSize: '1.125rem',
                                                    textAlign: 'left',
                                                }}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        ) : (
                            <List sx={{ width: 'fit-content' }}>
                                {field.list.map((item, index) => {
                                    return (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <StarIcon sx={{ color: 'primary.main' }} />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item}
                                                primaryTypographyProps={{ color: 'primary.main', fontSize: '1.125rem' }}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        )}
                    </Box>
                );
            })}
        </Grid>
    );
};

export default DetailTextProduct1Part1;
