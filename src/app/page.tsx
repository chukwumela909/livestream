import { HomeActions } from "@/components/home-actions";
import { Container, Flex, Kbd, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-10 sm:p-24">
      <Container size="1">
        <Flex direction="column" align="center" gap="5">
          <Image
            src="/logo.png"
            alt="Wordcast"
            width="240"
            height="120"
            className="invert dark:invert-0 mt-8 mb-2"
          />
          <Text className="text-center" as="p">
            Welcome to Wordcast
          </Text>
          <Text>
            Stream the Gospel from around the globe.
          </Text>

          <HomeActions />
          <Separator orientation="horizontal" size="4" className="my-2" />
          {/* <Text as="p" size="2">
            Feel free to clone this full-stack NextJS app{" "}
            <Link
              href="https://github.com/livekit-examples/livestream"
              target="_blank"
            >
              here
            </Link>
            .
          
          </Text> */}
        </Flex>
      </Container>
    </main>
  );
}
