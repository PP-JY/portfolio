import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";



const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head >
        <title>{title || "박준용 — Fault-Tolerant Robotics Portfolio"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

<meta name="description" content={`${desc || '박준용, 동아대학교 전기공학과 4학년. 전류 기반 고장 감지와 분산 제어로 멈추지 않는 로봇 시스템을 만듭니다.'}`} />


<meta property="og:title" content="박준용 — Fault-Tolerant Robotics Portfolio" />


<meta property="og:description" content="전류 기반 고장 감지와 분산 제어로 멈추지 않는 로봇 시스템을 만듭니다."/>

   <meta httpEquiv="content-language" content="ko"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="Personal Portfolio, Robotics, Embedded" />
    <meta name="author" content="박준용" />
    <meta name="audience" content="Everyone"/>
    {/* <!-- Facebook, whatsapp, instagram, twitter and other popular social media --> */}
    {/* <meta property="og:title" content={title}/> */}
    {/* <meta property="og:description" content="Site Content short description"/> */}
    {/* <meta property="og:image" content="http://example.com/thumbnail.jpg"/> */}
    {/* <meta property="og:url" content="http://example.com"/> */}
    {/* <meta name="twitter:card" content="summary_large_image"/> */}

    {/* <!-- Some Non-essential but recommended --> */}
    {/* <meta property="og:site_name" content="Website Name"> <!-- Optional --> */}
    {/* <meta name="twitter:image:alt" content="Alt text for image"> <!-- Optional --> */}

    {/* <!-- If has need analytics for facebook and twitter --> */}
    {/* <meta property="fb:app_id" content="your_app_id" /> */}
    {/* <meta name="twitter:site" content="@website-username"/> */}
   
  
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
     className="site-content">
      {children}
    </Box>
    <Footer />
  </>
  )


}
 
 
  



export default Layout; 