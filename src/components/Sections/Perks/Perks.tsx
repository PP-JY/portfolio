import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';
import {useEffect} from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import GroupsIcon from '@mui/icons-material/Groups';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}

gsap.registerPlugin(ScrollTrigger);


const perksArray = [{
    title:'고장 감지 설계',
    Icon:ReportProblemIcon,
    text:'전류 파형을 분석해 고장을 실시간으로 감지하고, 0.08초 안에 자동으로 대응하는 분산 제어 시스템을 설계합니다. 문제를 회피하지 않고 견디는 시스템을 만드는 게 목표입니다.',
},
{
    title : '임베디드 · 하드웨어',
    text : 'ESP32와 라즈베리파이로 실시간 제어를 구현하고, KiCad/EasyEDA로 PCB를 직접 설계합니다. 아이디어를 손으로 만질 수 있는 물건으로 끝까지 완성하는 걸 좋아합니다.',
    Icon :  DeveloperBoardIcon,
}   ,
{
    title : '팀 협업 · 발표',
    Icon : GroupsIcon,
    text : '캡스톤과 대학 연합 프로젝트에서 팀원들과 설계를 나누고 발표해왔습니다. 전국 소프트웨어 성과 공유 포럼 본선 진출 경험이 있습니다.'
}
]
const Perks = () => {

    

    useEffect(() => {
        MainTitleAnimation('.h1','.h2')
    }, [])

    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
                className='h1 t25o0'
                variant='h1'
                sx={{
             
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                What I Bring
            </Typography>
            <Typography
                variant='h2'
                className='secondary h2'
                sx={{
                pt: '1.5em',
                transform: 'translateY(15px)',
                opacity: 0,
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                고장 나도 멈추지 않는 시스템을 만들기 위해 쌓아온 것들입니다.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {perksArray.map(perk => {
                    return <PerkCard  key={perk.title} title={perk.title} text={perk.text} Icon={perk.Icon}/>
                })}
            </Box>
        </Box>
    </Container> < Divider /> </>)
}

export default Perks