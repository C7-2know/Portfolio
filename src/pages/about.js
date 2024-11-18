const About=()=>{
    return(
        <div className="mx-5 p-md-2 d-flex flex-column gap-5">
            <div className="d-flex flex-column flex-md-row gap-5 align-items-center px-md-5 w-100 ">
                <img src="profile.jpg" className="col-3"/>
                <div className="write col-7">
                    <h2 className="">About Me</h2>
                    <h1 className="text-primary">Hi, I'm Betelhem Yimam,</h1>
                    <p>A passionate Software Engineer with over 2 years of experience in full-stack development. Throughout my academic journey and various internships, I've honed my skills in developing robust and scalable applications.
                    </p>
                    <p>I specialize in <strong className="text-warning">Go, .NET, and React</strong>, with hands-on experience in building backend services, APIs, and dynamic frontends. 
                    </p>
                    <p>I’m always eager to learn and take on new challenges, and committed to delivering high-quality, efficient solutions. Let’s build something great together!</p>
                </div>
            </div>
            <div className="ms-md-auto w-75-custom">
                <h2 className="px-3 w-75 ">Education</h2>
                <div className="d-flex bg-danger">
                    <div className=" p-3">
                        <div className="card text-box p-2">
                            <h2 className="text-primary">Addis Ababa University</h2>
                            <small>2021 - 2025 expected</small>
                            <p>sample text sample text sample text sample text sample text </p>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="card text-box p-2">
                            <h2 className="text-primary">A2SV| African to Silicon Valley</h2>
                            <small>November 2023-2025 expected</small>
                            <p>Data Structure and Algorithms</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;