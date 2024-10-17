import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";

function ContactUs() {
  return (
    <div className="h-[80vh] p-3 ">
      <h1 className="text-center font-bold text-[25px] my-5">Contact Us</h1>
      <div className="grid grid-cols-1 h-[60vh] sm:grid-cols-2">
        <div className="hidden sm:block sliderOutput-1"></div>
        <div className="flex flex-col justify-evenly p-4">
          <div>
            <h2 className="font-bold text-[25px] my-2">
              We&apos;d Love to Hear From You, Lets Get In Touch!
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-7">
            <div>
              <h2>Address</h2>
              <p>No77 Stadium Rd,In Trust Fund Building</p>
            </div>
            <div>
              <h2>Email</h2>
              <p>jussolar209@gmail.com</p>
            </div>
            <div>
              <h2>Phone</h2>
              <p>+234 0932351284</p>
            </div>
            <div>
              <h2>Extra Information</h2>
              <h2>We are open:Monday - Saturday,</h2>
              <h2>10Am - 5PM and closed on sunday</h2>
              <h2>sorry for that</h2>
            </div>
          </div>
          <div>
            <p className=" font-bold text-[15px] my-2">Social</p>
            <div className="flex  gap-5 sm:gap-10">
              <Button variant="contained">
                <FacebookIcon />
              </Button>
              <Button variant="contained">
                <a href="https://wa.me/2349032351284">
                  <WhatsAppIcon />
                </a>
              </Button>
              <Button variant="contained" color="success">
                <a href="tel:2349032351284">
                  <CallIcon />
                </a>
              </Button>
              <Button variant="contained" color="success">
                <a href="mailto:jussolar209@gmail.com">
                  <EmailIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
