import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";

const Home: NextPage = () => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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
              <Blockquote icon={<ImQuotesLeft />} cite="– Forrest Gump">
                Let go of your attachment to being right, and suddenly your mind
                is more open. You're able to benefit from the unique viewpoints
                of others, without being crippled by your own judgement.
              </Blockquote>
              <Button
                color="green"
                variant="subtle"
                size="xs"
                leftIcon={<BiRevision />}
              >
                Another one
              </Button>
              {/* <ActionIcon mt="xl" variant="hover" size="xl" color="cyan">
                <BiRevision />
              </ActionIcon> */}
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
