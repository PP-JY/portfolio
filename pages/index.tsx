import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Experience from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout'
import {projectsArray, iconsArray} from '../src/data/content'

const Home : NextPage = () => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`박준용, 동아대학교 전기공학과 4학년. 전류 기반 고장 감지와 분산 제어로 멈추지 않는 로봇 시스템을 만듭니다.`} title='박준용 — Fault-Tolerant Robotics Portfolio'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Hero/>
                <Perks/>
                <Experience iconsArray={iconsArray}/>
                <Projects projectsArray={projectsArray}/>
                <About/>
                <CTA/>

                <Box
                    ref={ball}
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
                    className="ball"></Box>

            </Box>
        </Layout>

    )
}

export default Home
