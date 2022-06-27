import type { NextPage } from "next";
import Head from "next/head";
import {
  ActionIcon,
  Blockquote,
  Box,
  ColorScheme,
  MantineProvider,
  Text,
  Title,
  ColorSchemeProvider,
  Button,
} from "@mantine/core";
import { BiMoon, BiRevision, BiSun } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { useEffect, useState } from "react";
import quotes from "./quotes.json";

const Home: NextPage = () => {
  const preferredColorScheme = useColorScheme();
  const [quote, setQuote] = useState<any>("");
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const getQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Box>
          <Head>
            <title>Great Success</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "10px 10px 0px 10px",
            }}
          >
            <Title order={4}>Great Success</Title>
            <ActionIcon size="md" onClick={() => toggleColorScheme()}>
              {colorScheme === "dark" ? (
                <BiMoon size="16" />
              ) : (
                <BiSun size="16" />
              )}
            </ActionIcon>
          </Box>

          <Box
            sx={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "800px",
              }}
            >
              {/* <Title order={5}>Your quote of the day</Title> */}
              {/* if blank author handle it */}
              <Blockquote
                icon={<ImQuotesLeft />}
                cite={
                  quote.quoteAuthor === "" ? "Anonymous" : quote.quoteAuthor
                }
              >
                {console.log(quote)}
                {quote.quoteText}
              </Blockquote>
              <Button
                color="green"
                variant="subtle"
                size="xs"
                leftIcon={<BiRevision />}
                onClick={() => getQuote()}
              >
                Another one
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AiFillGithub />
          <Text ml={10} size="sm" weight={600}>
            Made to give you some encouragement.
          </Text>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Home;
