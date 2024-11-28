import StarIcon from '@mui/icons-material/Star';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

type Props = {};

const DetailTextProduct4 = (props: Props) => {
    const list = [
        '60 x 160 เซนติเมตร',
        '80 x 180 เซนติเมตร',
        '80 x 200 เซนติเมตร',
        '120 x 220 เซนติเมตร',
    ];

    return (
        <Box display={'flex'} flexDirection={'column'} gap={4} py={4}>
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
                    มั่นใจทุกรายละเอียดการผลิตป้ายสแตนดี้
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    เพราะเราใส่ใจเรื่องคุณภาพทุกขั้นตอนการผลิต
                    เลือกใช้วัสดุที่มีมาตราฐานเพื่อให้ได้ป้ายสแตนดี้ทุกชิ้นสวยงาม ทนทานต่อการใช้งาน
                    นํ้าหนักเบา ประกอบง่าย เคลื่อนย้ายได้สะดวก
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
                    พิมพ์ด้วยเทคโนโลยี Inkjet Outdoor 4 สีที่ให้ความคมชัดสูง
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    เราใช้เทคโนโลยีการพิมพ์ Inkjet Outdoor 4
                    สีที่ทันสมัยและมีความคมชัดสูงทําให้ป้ายสแตนดี้ทุกชิ้นมีสีสันสวยงาม
                    โดดเด่นสีที่พิมพ์ออกมาจะไม่ซีดจางง่าย ยังคงความคมชัดได้ยาวนาน
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
                    ใช้วัสดุ PP Board แข็งแรงและนํ้าหนักเบา
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    เราเลือกใช้ PP Board ที่มีความหนา 3 และ 4 มิลลิเมตร
                    ที่เหมาะกับการจัดบูธหรือวางตกแต่งภายใน-ภายนอกร้าน
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
                    มีขนาดให้เลือกหลายหลาย
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    สามารถเลือกขนาดได้ตามความต้องการ
                </Typography>
                <List sx={{ width: 'fit-content' }}>
                    {list.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <StarIcon sx={{ color: 'primary.main' }} />
                                </ListItemIcon>
                                <ListItemText primary={item} primaryTypographyProps={{ color: 'primary.main', fontSize: '1.125rem' }} />
                            </ListItem>
                        );
                    })}
                </List>
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
                    บริการรับตัดป้ายสแตนดี้
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    เรามีบริการตัดป้ายสแตนดี้ตามแบบที่ลูกค้าต้องการ
                    ไม่ว่าจะมีดีไซน์เฉพาะตัวหรือตัดเป็นรูปแบบต่าง ๆ ไม่ว่าจะเป็นรูปคน รูปสิ่งของ หรือ
                    รูปทรงอื่นๆ เราสามารถตัดได้อย่างแม่นยําตรงตามแบบทุกรายละเอียด
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
                    บริการแก้ไข Artwork ให้ฟรี
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    เรามีบริการแก้ไขปรับ Artwork เพื่อให้ขนาดงานตรงกับขนาดป้ายสแตนดี้ได้อย่างลงตัว
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
                    ระยะเวลาการผลิต
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    ใช้เวลาการผลิต 3 - 5 วัน <strong>ไม่รวมระยะเวลาการออกแบบ</strong>
                </Typography>
            </Box>
        </Box>
    );
};

export default DetailTextProduct4;
