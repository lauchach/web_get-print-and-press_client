import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

type Props = {};

const DetailTextProduct9 = (props: Props) => {
    const list = [
        {
            title: 'ประโยชน์ของป้ายตั้งโต๊ะ',
            list: [
                'ใช้สำหรับโชว์เมนูอาหาร โปรโมชั่น หรือรายการสินค้า',
                'น้ำหนักเบา ใช้พื้นที่วางน้อย',
                'สามารถผลิตได้ทั้งแนวตั้ง และแนวนอน',
            ],
        },
        {
            title: 'ราคาทำป้ายตั้งโต๊ะ แบบกระดาษอาร์ต',
            list: [
                'ขนาด A5 เริ่มต้น 25 บาท ขั้นต่ำจำนวน 100 ชิ้น',
                'ขนาด A4 เริ่มต้น 35 บาท ขั้นต่ำจำนวน 100 ชิ้น',
                'ขนาด A3 เริ่มต้น 75 บาท ขั้นต่ำจำนวน 100 ชิ้น',
            ],
        },
        {
            title: 'ราคาทำป้ายตั้งโต๊ะ แบบ PP Board หรือ Future Board',
            list: [
                'ขนาด A5 เริ่มต้น 30 บาท ขั้นต่ำจำนวน 50 ชิ้น',
                'ขนาด A4 เริ่มต้น 45 บาท ขั้นต่ำจำนวน 50 ชิ้น',
                'ขนาด A3 เริ่มต้น 85 บาท ขั้นต่ำจำนวน 50 ชิ้น',
            ],
        },
        {
            title: 'วัสดุที่ใช้',
            list: [
                'กระดาษอาร์ตหนา 350 แกรม แข็งแรง น้ำหนักเบาทนทานกว่ากระดาษทั่วไป สามารถนำมาพิมพ์สีให้ภาพชัดได้',
                'PP Board หรือ Future Board หนา 4 มม. สามารถนำมาทำเป็นป้ายตั้งโต๊ะได้ไม่ล้ม แข็งแรง',
                'ขนาด A3 เริ่มต้น 85 บาท ขั้นต่ำจำนวน 50 ชิ้น',
            ],
        },
    ];

    return (
        <Box display={'flex'} flexDirection={'column'} gap={4} py={4}>
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
                    </Box>
                );
            })}
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
                    เคลือบ PVC แบบเงาหรือด้านเพิ่มความเหนียว
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    ป้ายตั้งโต๊ะเรามีบริการเคลือบผิวด้วย PVC ทั้งแบบเงา และ ด้านช่วยเพิ่มความเหนียว ความทนทาน
                    ป้องกันการฉีกขาด การขูดสีและกันความชื่นได้เป็นอย่างดี
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
                    เคลือบ PVC แบบเงา
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    ช่วยให้สีมีความสวย สดใหม่มากขึ้น เหมาะสำหรับแสดงรายการอาหาร เครื่องดื่ม รายการสินค้า
                    เป็นต้น
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
                    เคลือบ PVC แบบด้าน
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    ช่วยให้งานไม่สะท้อนแสง ผิวสัมผัสดูหรูหรา สวยงามมีราคา มักจะนิยมใช้กับนามบัตร การ์ดเชิญ
                    ปกหนังสือ
                </Typography>
            </Box>
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
                    พิมพ์ด้วยเทคโนโลยี Inkjet Outdoor 4 สีที่ให้ความคมชัดสูง
                </Typography>
                <Typography variant="body1" fontSize={'1.125rem'} color={'primary.main'}>
                    เราใช้เทคโนโลยีการพิมพ์ Inkjet Outdoor 4 สี
                    ที่ทันสมัยและมีความคมชัดสูงทำให้ป้ายตั้งโต๊ะทุกชิ้นมีสีสันสวยงาม
                    โดดเด่นสีที่พิมพ์ออกมาจะไม่ซีดจางง่าย ยังคงความคมชัดได้ยาวนาน
                </Typography>
            </Box>
        </Box>
    );
};

export default DetailTextProduct9;
