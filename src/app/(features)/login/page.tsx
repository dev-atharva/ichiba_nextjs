import Head from "next/head";
import { HomeNavBar } from "@/app/_components/Header/navbar";
import { HomeFooter } from "@/app/_components/Footer/footer";

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <body>
                <HomeNavBar />
                <main className='flex p-2'>
                    <p>Login page</p>
                </main>
                <HomeFooter />
            </body>
        </>
    )
}