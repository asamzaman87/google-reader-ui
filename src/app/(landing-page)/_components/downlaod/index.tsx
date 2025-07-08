"use client";
import { useThemeContext } from "@/components/context/theme-context";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Alert,
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ToggleColorMode } from "../toggle-color-mode";

const EXT_URL = {
  chrome: "https://chromewebstore.google.com/detail/google-reader-a-free-Google/aeggkceabpfajnglgaeadofdmeboimml?authuser=0&hl=en",
  firefox: "https://addons.mozilla.org/en-US/firefox/addon/google-reader/",
  edge: "https://microsoftedge.microsoft.com/addons/detail/oalnicbngdjhapmbjnoampbhioncjleo",
}
const DownloadUI = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
    id="download-header"
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
      <Box sx={{ float: "right", pt: 2, pr: 2 }}>
        <ToggleColorMode mode={mode} toggleColorMode={toggleTheme} />
      </Box>
      <Container
        id="Creators"
        sx={{
          pt: { xs: 10 },
          pb: { xs: 8, sm: 12 },
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Image
            src={"/images/logo.png"}
            width={100}
            height={100}
            alt="google-reader-logo"
          />
          <Typography component="h2" variant="h3" color="text.primary">
            Google Reader
          </Typography>

          <Typography variant="h5" color="text.secondary">
            {`Listen to Text Like Never Before with Google-Powered Voices`}
          </Typography>
          <Grid container my={1} spacing={5} alignItems={"center"}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                color="text.primary"
                textAlign={"left"}
                py={2}
              >
                {`Transform Your Text into Premium, AI-Driven Speech—For Free!`}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign={"left"}
              >
                {`Looking for a revolutionary way to listen to text? Google Reader
                combines the power of Google's premium voices with
                user-friendly features to create an unparalleled text-to-speech
                experience. Whether you're typing, uploading documents, or just
                exploring ideas, Google Reader lets you enjoy the richness of
                Google's AI-powered voices—without any cost! With added
                features like dark/light mode, adjustable playback speeds, pause
                and resume, and a full-screen UI, it’s never been easier to turn
                text into an immersive listening experience`}
              </Typography>

              <Box
  py={3}
  display="flex"
  flexDirection="column"
  alignItems="center"
  width="100%"
  gap={2}
>
  <Box
    display="flex"
    justifyContent="center"
    flexWrap="wrap"
    gap={2}
    width="100%"
  >
    <Button
      href={EXT_URL.chrome}
      target="_blank"
      color="success"
      variant="contained"
      sx={{
        width: { md: "320px", xs: "100%" },
        display: "flex",
        alignItems: "center",
        gap: 2,
        fontWeight: 700,
        color: "#fff",
        height: "fit-content",
      }}
    >
      <Image src="/images/chrome.png" alt="chrome" width={20} height={20} />
      GET GOOGLE READER FOR CHROME
    </Button>

    <Button
      href={EXT_URL.firefox}
      target="_blank"
      color="success"
      variant="contained"
      sx={{
        width: { md: "320px", xs: "100%" },
        display: "flex",
        alignItems: "center",
        gap: 1,
        fontWeight: 700,
        color: "#fff",
        height: "fit-content",
      }}
    >
      <Image src="/images/firefox.png" alt="firefox" width={20} height={20} />
      GET GOOGLE READER FOR FIREFOX
    </Button>
  </Box>

  <Button
    href={EXT_URL.edge}
    target="_blank"
    color="success"
    variant="contained"
    sx={{
      width: { md: "320px", xs: "100%" },
      display: "flex",
      alignItems: "center",
      gap: 1,
      fontWeight: 700,
      color: "#fff",
      height: "fit-content",
    }}
  >
    <Image src="/images/edge.png" alt="edge" width={20} height={20} />
    GET GOOGLE READER FOR EDGE
  </Button>
</Box>

              
                <Alert sx={{ mb: 2 }} severity="info">Note: The extension may not work consistently work for you due to a Google update. If this is the case for you, then expect it to be resolved in the coming days.</Alert>
              
              <Box textAlign={"left"}>
                <Link
                  variant="subtitle2"
                  href="https://docs.google.com/document/d/11S4apac_81aUN0qpjrGZeqWzpMahOZkv9_x-jflfvq4/edit?usp=sharing"
                >
                  {`By clicking the link above, you agree to our Terms of Use.`}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <CardContent>
                  <Typography component="h2" variant="h5" color="text.primary">
                    How It Works
                  </Typography>
                  <CardMedia
                    component={"iframe"}
                    height={300}
                    src="https://www.youtube.com/embed/JJVkg3LpDto?si=2AzI9h4OG1LE28U5"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{ mt: 1, borderRadius: 1, border: 0 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DownloadUI;
