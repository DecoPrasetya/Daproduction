const navbar = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) element.scrollIntoView({
            behavior : 'smooth'
        })
    }


    return(
        <navbar>
            <ul>
                <a href="#"><button onClick={() => scrollToSection('biodata')}>BIODATA</button></a>
                <a href="#"><button onClick={() => scrollToSection('pendidikan')}>PENDIDIKAN</button></a>
                <a href="#"><button onClick={() => scrollToSection('pengalaman')}>PENGALAMAN</button></a>
                <a href="#"><button onClick={() => scrollToSection('motivasi')}>MOTIVASI</button></a>
            </ul>
        </navbar>
    )
}

export default navbar