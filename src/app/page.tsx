"use client";

import SEO from "@/app/components/SEO";
import Navigation from "@/app/components/Navigation";
import Greetings from "@/app/views/Greetings";
import Skills from "@/app/views/Skills";
import Proficiency from "@/app/views/Proficiency";
import Education from "@/app/views/Education";
import Experience from "@/app/views/Experience";
import Feedbacks from "@/app/views/Feedbacks";
import Projects from "@/app/views/Projects";
import GithubProfileCard from "@/app/components/GithubProfileCard";

export default function Home() {
    return (

        <main>
            <SEO
                data={{
                    title: "Yideg Misganaw",
                    description:
                        "A passionate backend web developer.",
                    image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
                    url: "https://developer-portfolio-1hanzla100.vercel.app",
                    keywords: [
                        "Yideg Misganaw",
                        "Portfolio",
                        "Yideg Portfolio ",
                        "web developer",
                        "full stack",
                        "full stack web developer",
                        "mobile app developer",
                        "android developer",
                        "django",
                        "flask",
                        "django rest framework",
                        "nodejs ",
                        "expressjs",
                        "reactjs ",
                        "contextapi",
                        "redux",
                        "flutter",
                    ],
                }}
            />
            <Navigation />
            <Greetings />
            <Skills />
            <Proficiency />
            <Education />
            <Experience />
            <Feedbacks />
            <Projects />
            <GithubProfileCard/>
        </main>
    );
}
