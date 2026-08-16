import {Container, Typography, Grid, Divider} from '@mui/material';
import { useEffect } from 'react';
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import {centeredStyles} from '../Perks/Perks';
import ToolCard from './ToolCard';
import gsap from 'gsap';

const TechTools = ({iconsArray} : any) => {
    let FrontendTools = iconsArray && iconsArray.filter((icon : any) => !icon.isBackend)
    let OtherTools = iconsArray && iconsArray.filter((icon : any) => icon.isBackend)

    useEffect(() => {
        MainTitleAnimation('.title1', '.title2')
        gsap.to('.secondTitle', {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.secondTitle',
                start: 'top 70%'
            }
        })
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        py: {
            xs: '6em'
        }
    }}>

        <Grid container>

            <Grid item sx={centeredStyles}>
                <Typography
                    className=' title1 t25o0'
                    variant='h1'
                    sx={{
                    fontSize: {
                        xs: '2.2em',
                        sm: '2.5em',
                        md: '3em'
                    }
                }}
                    fontWeight='600'>
                    Skills &amp; Tools
                </Typography>
                <Typography
                    variant='h2'
                    className='secondary title2 t25o0'
                    sx={{
                    pt: '1.5em',
                    maxWidth: '570px',
                    fontSize: {
                        xs: '.8em',
                        sm: '1em'
                    }
                }}>
                    로봇 시스템을 설계하고 만드는 데 쓰는 도구들
                </Typography>

            </Grid>
            <Grid
                sx={{
                ...centeredStyles,
                flexDirection: 'row',
                justifyContent: {
                    xs: "center"
                },
                mt: '3em',
                flexWrap: 'wrap'
            }}
                xs={12}
                item>

                {FrontendTools && FrontendTools.map((item : any) => {
                    return <ToolCard
                        className='toolCard1'
                        Icon={item.Icon}
                        title={item.title}
                        key={item.title}/>
                })}

            </Grid>

           {OtherTools ? 
            <>
           
            <Grid item sx={centeredStyles}>

                <Typography
                    variant='h2'
                    className='secondary secondTitle t25o0'
                    sx={{
                    pt: '3.5em',
                    opacity: 0,
                    fontSize: {
                        xs: '.8em',
                        sm: '1em'
                    }
                }}>
                    설계 · 진단 도구
                </Typography>

            </Grid>
            <Grid
                sx={{
                ...centeredStyles,
                flexDirection: 'row',
                justifyContent: {
                    xs: "center"
                },
                mt: '3em',
                flexWrap: 'wrap'
            }}
                xs={12}
                item>

                {OtherTools.map((tool : any) => {
                    return <ToolCard
                        className='toolCard2'
                        Icon={tool.Icon}
                        title={tool.title}
                        key={tool.title}/>
                })}

            </Grid>
            
           </>
            : 
            <Typography sx={{margin:'0 auto',fontSize:'1em', fontWeight:'500', color:'red'}} variant='h1' >There was an error loading the items.</Typography>
            }

        </Grid>

    </Container> < Divider /> </>)
}

export default TechTools