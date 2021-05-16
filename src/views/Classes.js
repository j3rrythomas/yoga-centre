import GenericSection from "../components/sections/GenericSection";
import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { Grid, Typography } from "@material-ui/core";
import illust1 from "./../assets/images/illust-1.svg";
import illust2 from "./../assets/images/illust-2.svg";
import illust3 from "./../assets/images/illust-3.svg";
import ButtonGroup from "./../components/elements/ButtonGroup";
import Button from "./../components/elements/Button";

export default function Classes() {
  const [isLoadedHeader, setisLoadedHeader] = useState(null);
  const [isLoadedSection, setisLoadedSection] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoadedHeader("is-revealed");
    }, 300);
    const timer2 = setTimeout(() => {
      setisLoadedSection("is-revealed");
    }, 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <>
      <Header
        navPosition="right"
        className={"reveal-from-bottom " + isLoadedHeader}
      />
      <GenericSection
        className={"grid-section reveal-from-bottom " + isLoadedSection}
      >
        <Grid container spacing={3} className="grid-container">
          <Grid item xs={12} className="grid-item">
            <div className="grid-content-button">
              <div className="grid-content">
                <Typography variant="h4" component="h1">
                  Regular Classes
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, quibusdam officiis. Laudantium impedit vero ipsa
                  architecto in aliquid laboriosam quo nostrum beatae. Dolorem
                  ipsa nihil corporis eligendi saepe officia doloribus?
                </Typography>
              </div>

              <ButtonGroup>
                <Button tag="a" color="primary" wideMobile href="/schedule">
                  View Schedule
                </Button>
              </ButtonGroup>
            </div>

            <div className="grid-img-">
              <img src={illust1} alt="Regular Classes Illust" />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className="grid-item has-top-divider"
            style={{ flexDirection: "row-reverse" }}
          >
            <div
              className=" grid-content grid-content-right"
              // style={{ alignItems: "flex-end", textAlign: "right" }}
            >
              <Typography variant="h4" component="h1">
                Personal Classes
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                soluta optio, exercitationem sed atque saepe? Amet atque nihil
                voluptate ducimus eum ullam vitae incidunt minima nemo quo,
                repudiandae dolorem assumenda!
              </Typography>
            </div>
            <div className="grid-img">
              <img src={illust2} alt="Personal Classes Illust" />
            </div>
          </Grid>
          <Grid item xs={12} className="grid-item has-top-divider">
            <div className="grid-content">
              <Typography variant="h4" component="h1">
                External Classes
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae odit eligendi rerum atque. At alias dolorem
                quibusdam, distinctio assumenda ducimus exercitationem
                dignissimos illo voluptate eaque adipisci? Quas, ratione
                facilis. Similique?
              </Typography>
            </div>
            <div className="grid-img">
              <img src={illust3} alt="External Classes Illust" />
            </div>
          </Grid>
        </Grid>
      </GenericSection>
    </>

    //
  );
}
