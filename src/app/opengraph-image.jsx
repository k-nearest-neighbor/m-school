/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";


// screw this make your own

export const runtime = "edge";
export const alt = "AI Breakout - Notes on AI Research.";
export const contentType = "image/png";


export default async function GET({ request, params, searchParams, emojiname }) {

  // Font
  const interSemiBold = await fetch(
    new URL("./fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #000 25%, #000 50%, #000 75%)",
        }}
      >
        {/* <img
          src={new URL(
            "../public/apple-touch-icon.png",
            import.meta.url
          ).toString()}
          alt="AI Maintainer Logo"
          tw="w-60 h-60 mb-10 opacity-95"
        /> */}
        <h1
          style={{
            fontSize: "100px",
            background:
              "linear-gradient(to bottom right, #1E2B3A 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "6rem",
            letterSpacing: "-0.02em",
            textShadow: "0 35px 35px #fff"
          }}
        >
          AI Breakout
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
        },
      ],
    }
  );
}
