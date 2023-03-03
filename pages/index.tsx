import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Banner from '../components/banner'
import SmallCard from '../components/smallCard'
import MediumCard from '../components/mediumCard'
import LargeCard from '../components/largeCard'
import Footer from '../components/footer'



export default function Home({ exlporeData, cardData }: any) {
    return (
        <>
            <div className=''>
                <Head>
                    <title>PAPA Airbnb</title>
                </Head>

                <Header placeholder={""} />
                <Banner />
                <main className='max-w-7xl mx-auto px-8 sm:px-16'>
                    <section className='pt-6'>
                        <h2 className='text-4xl font-semibold pg-5'>Explore Neary </h2>
                        {/* pull som data from a server _ API endpoints */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {exlporeData?.map((item: any) => (
                                <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2 className='text-4xl font-semibols py-8'>Live Anywhere</h2>
                        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
                            {cardData?.map((item: any) => (
                                <MediumCard key={item.img} img={item.img} title={item.title} />
                            ))}
                        </div>
                    </section>
                    <LargeCard img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Wishlists curated by Airbnb" buttonText='Get Inspired' />
                </main>
                <Footer/>

            </div>
        </>
    )
}
export async function getStaticProps() {
    const exlporeData = await fetch("https://www.jsonkeeper.com/b/4G1G").
        then(
            (res) => res.json()
        );
    const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").
        then(
            (res) => res.json()
        );
    return {
        props: {
            exlporeData,
            cardData
        }
    }
}
