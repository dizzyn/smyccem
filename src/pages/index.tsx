import Page from '../components/Page';

const Index = () => {
    return (
        <Page title="" bg="/assets/site/006.jpeg" contentAlign="bottom">
            <p>
                <b>Trhni si smyčcem</b> je komorní těleso mezi punkem a filharmonií.
            </p>
            <br />
            <p>
                Hrajeme vlastní písně. Je nás 6 a máme klasické hudební nástroje. Nejlépe se nám
                vystupuje mezi skvělými lidmi v zajímavých prostorech a v přírodě. Naše písně
                reflektují sociální, filosofická a zahradnická témata. Patříme pod magický
                realismus.
            </p>
        </Page>
    );
};

export default Index;

export const getStaticProps = async () => {
    return {
        props: {},
    };
};