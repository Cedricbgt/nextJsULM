import React from "react";
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Ecole de pilotage",
            "Baptême de l'air",
            "Vols de loisir",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <img
                className="relative rounded-full h-32 w-45 mx-auto object-cover"
                src="https://le-cdn.website-editor.net/65007886f4ed4116af12862843d6ad56/dms3rep/multi/opt/LOGO+jaune+GTULM_D-1920w.png"
                alt=""/>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    GAP-TALLARD ULM
                </h2>
                <h1 className="text-5xl lg:6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>
                <div className="pt-5">
                    <Link href="#tarifs">
                        <button className="heroButton">TARIFS</button>
                    </Link>
                    <Link href="#infos">
                        <button className="heroButton">INFORMATIONS</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton">Contact</button>
                    </Link>
                    <Link href="#partner">
                        <button className="heroButton">PARTENAIRES</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}