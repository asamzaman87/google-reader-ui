import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { alpha, useTheme } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Copyright() {
  return (
    <Typography variant="subtitle2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      Google Reader - {new Date().getFullYear()}
    </Typography>
  );
}
export const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  const offset = 128;
  if (sectionElement) {
    const targetScroll = sectionElement.offsetTop - offset;
    sectionElement.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
};

export default function Footer() {

  const pathname = usePathname();
 
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2 },
          py: { xs: 8, sm: 10 },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack sx={{ width: { xs: "100%", md: "60%" } }} spacing={2}>
            <Image
              alt="ReadeonIcon"
              src={"/images/logo.png"}
              width={40}
              height={40}
            />
            <Typography
              variant="subtitle2"
              sx={{ color: "text.secondary", mb: 2 }}
            >
              Experience the magic of Google voices with Google Reader. Enjoy
              premium-quality text-to-speech technology for free, paired with
              seamless usability and customization. Elevate how you engage with
              content—try Google Reader today!
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ justifyContent: "left" }}
            >
              <IconButton
                color="inherit"
                href="https://www.facebook.com/profile.php?id=61560510255251 "
                aria-label="Facebook"
                sx={{ alignSelf: "center" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.youtube.com/channel/UCTDg9vib8m6y51XIuLJwWxQ "
                aria-label="YouTube"
                sx={{ alignSelf: "center" }}
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/democraticdev123/ "
                aria-label="instagram"
                sx={{ alignSelf: "center" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/democratic-developer "
                aria-label="LinkedIn"
                sx={{ alignSelf: "center" }}
              >
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Stack>
          <Box
            sx={{
              display: "flex",
              gap: 8,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Link
                component={"button"}
                color="text.secondary"
                variant="subtitle2"
                onClick={() => {
                    scrollToSection('download-header')
                  
                }}
                sx={{ width: "100%", textAlign: "left" }}
              >
                Home
              </Link>

              {/* <Link
                component={"button"}
                color="text.secondary"
                variant="subtitle2"
                onClick={() => router.push("/pricing")}
                sx={{ width: "100%", textAlign: "left" }}
              >
                Pricing
              </Link> */}
              {/* <Link
                component={"button"}
                color="text.secondary"
                variant="subtitle2"
                onClick={() => router.push(routes.DOWNLOAD)}
                sx={{ width: "100%", textAlign: "left" }}
              >
                Download
              </Link> */}
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                gap: 1,
              }}
            >
              {/* <Typography variant="body2" sx={{ fontWeight: "medium" }}>
              Legal
            </Typography> */}
              <Link
                color="text.secondary"
                variant="subtitle2"
                href="https://docs.google.com/document/d/11S4apac_81aUN0qpjrGZeqWzpMahOZkv9_x-jflfvq4/edit?usp=sharing"
              >
                Terms of Service
              </Link>
              <Link
                color="text.secondary"
                variant="subtitle2"
                href="https://docs.google.com/document/d/1Fhkr5JJTb4075hE0cLB3kaWLd7F8vhXxvpIr2gXPcgY/edit?usp=sharing"
              >
                Privacy Policy
              </Link>
              <Link
                color="text.secondary"
                variant="subtitle2"
                href="https://docs.google.com/document/d/1dsUwa-qVOZAhzM9O2NMl0nWy9SGKOHJE6XQ_ZOv6z3I/edit?usp=sharing"
              >
                Contact Us
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 1, sm: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Copyright />
          </div>
        </Box>
      </Container>
    </Box>
  );
}
