import { redirect } from "next/navigation";
import HostPageImpl from "./page.client";

interface PageProps {
  searchParams: {
    at: string | undefined;
    rt: string | undefined;
  };
}

export default async function HostPage({
  searchParams: { at, rt },
}: PageProps) {
  if (!at || !rt) {
    redirect("/");
  }

  const livekitUrl = process.env.LIVEKIT_WS_URL;
  if (!livekitUrl) {
    throw new Error("LIVEKIT_WS_URL environment variable is missing");
  }
  
  const serverUrl = process.env.LIVEKIT_API_URL;
  if (!serverUrl) {
    throw new Error("LIVEKIT_API_URL environment variable is missing");
  }

  return <HostPageImpl authToken={at} roomToken={rt} serverUrl={serverUrl} />;
}
