"use client";
import Image from "next/image";
import Script from "next/script";
import { Archivo } from "next/font/google";

const courgette = Archivo({  subsets: ["latin"], style: 'normal' });

export default function Home() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js"
        onLoad={() => {
          console.log("Script loaded three");
        }}
      />
      <Script
        src="./init.js"
        onLoad={() => {
          console.log("Script loaded");
        }}
      />
      <main className={courgette.className}>
        <div id="title">
          <div
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "300px",
              maxHeight: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="gradient" />
            <Image
              src="/imagotipo.svg"
              alt="Next.js Logo"
              width={300}
              height={300}
            />

          </div>
        </div>
      </main>
    </>
  );
}
