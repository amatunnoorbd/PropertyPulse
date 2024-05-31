import { useEffect } from "react";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";
import ExtraSection from "../ExtraSection/ExtraSection";
import Partners from "../Partners/Partners";

const Home = () => {

    useEffect(() => {
        document.title = 'Home';
    }, []);


    return (
        <div>
            <Banner></Banner>
            <Partners></Partners>
            <Estates></Estates>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;