import { NavLink, useLoaderData } from 'react-router-dom'
import Header from '../../components/Header'
import Marquee from 'react-fast-marquee'
import Navbar from '../../components/Navbar'
import CategoryImages from '../../components/CategoryImages'

const Home = () => {
    const { data } = useLoaderData();

    return (
        <div>
            <Header />
            <div className='sm:max-w-6xl w-full flex items-center justify-center mt-4 mx-auto bg-gray-200'>
                <button className='btn capitalize bg-[#D72050] h-4 text-xs sm:text-lg text-white btn-error rounded-none'>Latest</button>
                <Marquee className='font-bold sm:text-sm text-xs text-gray-400' speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div className='max-w-6xl mx-auto mt-3'>
                <Navbar />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-4 w-full sm:max-w-6xl mx-auto '>
                <div className='border h-screen'>
                    <h1 className='font-bold'>All Category</h1>
                    <button className='btn w-full rounded-sm capitalize font-bold mt-5'>National News</button>
                    <div className='flex flex-col gap-4 ml-10 font-semibold text-gray-500 mt-7 '>
                        {
                            data.map((category) => <NavLink className="block" key={category.id}>{category.name}</NavLink>)
                        }
                    </div>

                    <div className='mt-6'>
                        <CategoryImages />
                    </div>

                </div>
                <div className='col-span-2 border h-screen'>Dragon new </div>
                <div className='border h-screen'>logn social media</div>
            </div>
        </div>
    )
}

export default Home