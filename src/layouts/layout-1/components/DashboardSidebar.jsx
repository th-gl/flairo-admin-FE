import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton"; // LAYOUT BASED HOOK

import useLayout from "@/layouts/layout-1/context/useLayout"; // CUSTOM COMPONENTS

import MultiLevelMenu from "./MultiLevelMenu";
import Link from "@/components/link";
import Scrollbar from "@/components/scrollbar";
import FlexBetween from "@/components/flexbox/FlexBetween";
import UserAccount from "@/layouts/layout-parts/UserAccount"; // CUSTOM ICON COMPONENT

// import  ArrowLeftToLine from  "@/icons/duotone/ArrowLeftToLine"; // STYLED COMPONENTS
// import ArrowRightToLine from "@/icons/duotone/ArrowRightToLine";
import { ArrowCircleRightOutlined } from "@mui/icons-material";
import { ArrowCircleLeftOutlined } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import { SidebarWrapper } from "@/layouts/layout-1/styles";
const TOP_HEADER_AREA = 70;
import appicon from "@/assets/app-icon.png";


export default function DashboardSidebar() {
  const { sidebarCompact, handleSidebarCompactToggle } = useLayout();
  const [onHover, setOnHover] = useState(false); // ACTIVATE COMPACT WHEN TOGGLE BUTTON CLICKED AND NOT ON HOVER STATE

  const COMPACT = sidebarCompact && !onHover ? 1 : 0;
  const theme = useTheme();
  const isRtl = theme.direction === "rtl";
  // console.log('check on off' , {COMPACT})
  return (
    <SidebarWrapper
      compact={sidebarCompact ? 1 : 0}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => sidebarCompact && setOnHover(false)}
    >
      <FlexBetween padding="3.5rem 1rem 3.5rem 1.8rem" height={TOP_HEADER_AREA}>
        <Link href="/" sx={{fontSize: '2rem', fontWeight: 'bold' ,color:"black"}}>
        FLAIRO
          {/* <Box
            component="img"
            borderRadius={50}
            src={appicon}
            alt="logo"
            width={50}
          /> */}
        </Link>

        {/* {isRtl ? (
                 {!COMPACT ? (
                  <IconButton onClick={handleSidebarCompactToggle}>
                    <ArrowLeftToLine />
                  </IconButton>
                ) : null}
             ) : (
              {!COMPACT ? (
                <IconButton onClick={handleSidebarCompactToggle}>
                  <ArrowRightToLine />
                </IconButton>
              ) : null}
             )} */}

        {/* {!COMPACT ? (
          <IconButton onClick={handleSidebarCompactToggle}>
            <ArrowLeftToLine />
          </IconButton>
        ) : null}
         */}
          {/* Conditionally render icons based on rtl and compact state */}
        <IconButton onClick={handleSidebarCompactToggle}>
          {isRtl ? (
            sidebarCompact ? (
              <ArrowCircleLeftOutlined />
            ) : (
              <ArrowCircleRightOutlined />
            )
          ) : sidebarCompact ? (
            <ArrowCircleRightOutlined /> 
          ) : (
            <ArrowCircleLeftOutlined />
          )}
        </IconButton>
        {/* {isRtl ? (
          !COMPACT ? (
            <IconButton onClick={handleSidebarCompactToggle}>
             
              {
                  sidebarCompact  === 1 ?   (<ArrowCircleRightOutlined/>) :   ( <ArrowCircleLeftOutlined  />)
              }
           
            </IconButton>
          ) : null
        ) : !COMPACT ? (
          <IconButton onClick={handleSidebarCompactToggle}>
             {
                  sidebarCompact  === 1 ?  ( <ArrowCircleLeftOutlined  />) :   ( <ArrowCircleRightOutlined/>)
              }
            
          </IconButton>
        ) : null} */}



      </FlexBetween>

      <Scrollbar
        autoHide
        clickOnTrack={false}
        sx={{
          overflowX: "hidden",
          maxHeight: `calc(100vh - ${TOP_HEADER_AREA}px)`,
        }}
      >
        <Box height="100%" px={2}>
          {/* NAVIGATION ITEMS */}
          <MultiLevelMenu sidebarCompact={!!COMPACT} />

          {/* USER ACCOUNT INFO */}
          {/*{!COMPACT ? <UserAccount /> : null}*/}
        </Box>
      </Scrollbar>
    </SidebarWrapper>
  );
}
