"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Cybersécurité",
        id: "cybersecurite",
        content: (
            <ul className="list-disc pl-2">
                <li><Link href="/">RootMe</Link></li>
                <li><Link href="/">TryHackMe</Link></li>
                <li><Link href="/">HackTheBox</Link></li>
            </ul>
        ),
    },
    {
        title: "Programmation",
        id: "programmation",
        content: (
            <ul className="list-disc pl-2">
                <li><Link href="/">GitHub</Link></li>
                <li><Link href="/">Vercel</Link></li>
                <li><Link href="/">LeetCode</Link></li>
            </ul>
        ),
    },
    {
        title: "Réseaux Sociaux",
        id: "reseauxsociaux",
        content: (
            <ul className="list-disc pl-2">
                <li><Link href="/">TikTok</Link></li>
                <li><Link href="/">Instagram</Link></li>
                <li><Link href="/">Youtube</Link></li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const  [tab, setTab] = useState("cybersecurite");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };


    return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.jpg" width={500} height={500}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">A propos de moi</h2>
                <p className="text-base lg:text-lg">
                    Je suis un consultant en cybersécurité avec une passion pour le développement et la cybersécurité.s
                </p>
                <div className="flex flex-row mt-8 justify-start">
                    <TabButton selectTab={() => handleTabChange("cybersecurite")} active={tab === "cybersecurite"}>
                        {" "}
                        Cybersécurité{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("programmation")} active={tab === "programmation"}>
                        {" "}
                        Programmation{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("reseauxsociaux")} active={tab === "reseauxsociaux"}>
                        {" "}
                        Réseaux{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
    );
};

export default AboutSection;