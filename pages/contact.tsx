import {
    Box,
    Typography,
    Container
} from '@mui/material';
import {useRef, useEffect} from 'react';
import HeroSectionAnimation from '../src/gsap/HeroSectionAnimation';
import gsap from 'gsap'
import {Divider} from '@mui/material';
import ContactBox from '../src/components/Contact/ContactBox';
import Layout from '../Layout/Layout';

const Contact = () => {
    const ref = useRef();
    const q = gsap
        .utils
        .selector(ref);
    useEffect(() => {
        gsap.to('.gradientBg2', {
            opacity: 1,
            duration: '.7',
            delay: '.75'
        })
        HeroSectionAnimation(q)

    }, [])

    return (
        <Layout
            title='박준용 — Contact'
            desc='새로운 프로젝트나 협업 제안은 이메일로 편하게 연락 주세요.'>

            <Box sx={{
                overflowX: 'hidden'
            }}>

                <Container
                    id='hero'
                    maxWidth='lg'
                    sx={{
                    margin: '0 auto',
                    pt: {
                        xs: '7.5em',
                        sm: '8.5em'
                    },
                    position: 'relative'
                }}>
                    <Box
                        sx={{
                        width: '150px',
                        height: '150px',
                        zIndex: '0',
                        position: 'absolute',
                        top: {
                            xs: '60%',
                            sm: ' 75%'
                        },
                        transform: 'rotate(15deg)',
                        right: {
                            xs: '80%',
                            sm: '86%'
                        },
                        background: 'transparent',
                        backgroundImage: 'radial-gradient(#0092ff 2px, transparent 0)',
                        backgroundSize: '15px 13px'
                    }}></Box>
                    <Box
                        className='gradientBg2'
                        sx={{
                        width: '90px',
                        height: '90px',
                        zIndex: '0',
                        position: 'absolute',
                        top: {
                            xs: '6%',
                            sm: '5%'
                        },
                        opacity: 0,
                        right: '-4%',
                        background: 'transparent',
                        backgroundImage: 'radial-gradient(#0092ff 2px, transparent 0)',
                        backgroundSize: '15px 13px'
                    }}></Box>
                    <Box ref={ref}>

                        <Typography
                            className='t1'
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.4em',
                                sm: '3.4em',
                                md: '3.8em'
                            },
                            textAlign: 'center',
                            transform: 'translateY(40px)',
                            opacity: 0,
                            pt: '1em',
                            fontWeight: '600'
                        }}>
                            같이 만들 프로젝트가 있다면
                        </Typography>
                        <Typography
                            variant='h2'
                            className='secondary t2 t25o0'
                            sx={{
                            textAlign: 'center',
                            pt: '1.5em',
                            margin: '0 auto',
                            fontSize: {
                                xs: '.9em',
                                sm: '1em'
                            },
                            maxWidth: '570px',
                            fontWeight: '300'
                        }}>
                            새로운 프로젝트나 협업, 채용 제안은 이메일로 편하게 연락 주세요.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                        justifyContent: 'center',
                        display: 'flex',
                        margin: '0 auto',
                        flexDirection: 'column',
                        width: {
                            xs: '100%',
                            md: '600px'
                        }
                    }}>

                        <Divider sx={{mt: '6em'}}/>
                        <Box sx={{
                            my: '3em'
                        }}>

                            <ContactBox
                            href='mailto:russiaassa63@naver.com'
                            target='_blank'
                            t1='Get in touch' t2='Email Address' t3='russiaassa63@naver.com'/>
                            <ContactBox
                            target='_self'
                            href={'#'}
                            t1='Location' t2='소속' t3='동아대학교 전기공학과'/>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </Layout>

    )
}

export default Contact
