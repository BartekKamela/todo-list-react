import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Bartłomiej Kamela"
            content={
                <>
                    <p>
                        Z wykształcenia jestem <b>inżynierem informatykiem</b> o specjalizacji <em>sieci komputerowe i systemy rozproszone</em>.
                        <span> Zawodowo zajmuję się sieciami</span>
                        <i>WAN, LAN, WLAN, PON oraz systemami virtualizacji. Serwery, routery, przełączniki, OLTy, światłowody oraz radiolinie</i> nie są mi obce.
                    </p>
                    <p>
                        Aktualnie chłonę wiedzę na kursie Front-End developera 👍
                    </p>
                </>
            }
        />
    </Container>
);