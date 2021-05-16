import React, { useEffect, useState } from "react";
import GenericSection from "../components/sections/GenericSection";
import Image from "../components/elements/Image";
import Header from "../components/layout/Header";
import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Grid} from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default function Connect() {
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
        <Grid container spacing={5}>
          <Grid item xs={12} className="center-content">
            <h2>Instructors</h2>
            <p>
              To know more about the classes and the way of teaching, please
              feel free to contact our instructors.Their contact details are provided below.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-root">
              <Image
                className="card-media"
                src={
                  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                }
              />
              <CardContent>
                {/* <TextInfoContent
                  classes={textCardContentStyles}
                  overline={"Kesha"}
                  heading={"Inner Varnika"}
                  body={
                    "That year, collection of songs, review melodies, memories full, this is a long and warm journey"
                  }
                /> */}
                <div className="instructor-info">
                  <h3>Ciniji P Thomas</h3>
                  <p>Certified Yoga Instructor</p>
                  <div className="phone-number">
                    {" "}
                    <WhatsAppIcon />
                    9446967141
                  </div>
                  <div className="mail-id">
                    {" "}
                    <MailOutlineIcon />
                     cinijipt@gmail.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card-root">
              <Image
                className="card-media"
                src={
                  "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                }
              />
              <CardContent>
                {/* <TextInfoContent
                  classes={textCardContentStyles}
                  overline={"Kesha"}
                  heading={"Inner Varnika"}
                  body={
                    "That year, collection of songs, review melodies, memories full, this is a long and warm journey"
                  }
                /> */}
                <div className="instructor-info">
                  <h3>Dr.Sheena Mary Jacob</h3>
                  <p>BNYS, Yoga Professional</p>
                  <div className="phone-number">
                    {" "}
                    <WhatsAppIcon /> 9847440224
                  </div>
                  {/* <div className="mail-id">
                    {" "}
                    <MailOutlineIcon />
                    
                  </div> */}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </GenericSection>
    </>
  );
}
