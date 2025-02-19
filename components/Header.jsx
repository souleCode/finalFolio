import react from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    return (
        <header className='py-8 text-white xl:py-12'>
            <div className='container flex items-center justify-between mx-auto'>
                {/*logo*/}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        <span className="text-accent">\</span>
                        SouleCode
                        <span className="text-accent">/</span>
                    </h1>
                </Link>
                {/*desktop nav*/}
                <div className="items-center hidden gap-8 xl:flex">
                    <Nav />
                    <Link href="/contact">
                        <Button>Engagez-moi</Button>
                    </Link>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}
export default Header