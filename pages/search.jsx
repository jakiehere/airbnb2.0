import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns';
import InfoCard from '../components/infoCard';
// import Map from '../components/map';


function Search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formatedStartDate} - ${formatedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

            <main className=''>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} number of quests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location} </h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 teat-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexible</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price Flexible</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col'>
                        {searchResults.map(item=>(
                            <InfoCard key={item.img} img={item.img} location={item.location} title={item.title} description={item.description} star={item.star} price={item.price} total={item.total} />
                        ))}
                    </div>
                </section>
                {/* <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map />
                </section> */}
            </main>

            <Footer />

        </div>
    )
}

export default Search;
export async function getServerSideProps(context) {
    const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").
        then(res => res.json());
    return {
        props: {
            searchResults,
        }
    }
}