import React from 'react'
import EmailTemplate from "../templates/EmailTemplate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer1() {
  return (
    <div>
      <div className="bg-[#B6EFEE] h-[11vh] w-[100%]  rounded-tr-2xl  rounded-tl-2xl   flex  justify-between px-16 items-center">
        <div>
          <EmailTemplate
            logo={<LocationOnIcon />}
            location="Location"
            address="No77 Stadium Rd,Port Harcourt"
          />
        </div>
        <div>
          <EmailTemplate
            logo={
              <a href="https://wa.me/2349032351284">
                <WhatsAppIcon />
              </a>
            }
            location="Contact Us"
            address="+234 0932351284"
          />
        </div>
        <div>
          <EmailTemplate
            logo={
              <a href="mailto:jussolar209@gmail.com">
                <EmailIcon />
              </a>
            }
            location="Email"
            address="JusSolar209@email.com"
          />
        </div>
        <div className=''>
          <EmailTemplate
            logo={
              <a href="https://wa.me/2349032351284">
                <FacebookIcon />
              </a>
            }
            location="Facebook"
            address="Jus Solar"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer1
