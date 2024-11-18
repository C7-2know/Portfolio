import { faGithub, faGolang, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../component/craousel";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const My_work=()=>{
    return(
        <div className="d-flex flex-wrap flex-lg-row justify-content-center pb-5 gap-5">
            <div className=" exper  text-white ">
                <div className=" exper-item container border rounded mt-3 w-100">
                    <FontAwesomeIcon className="circle"icon={faCircleArrowRight} />
                    <div>
                        <h3>BACKEND DEVELOPER INTERN</h3>
                        <h4 className="text-primary">A2SV|African to Silicon Valley</h4>
                        <small>Feb 2024-June 2024</small>
                        <div className="d-flex flex-wrap gap-1">
                            <h4 className="px-3">skills</h4>
                            <FontAwesomeIcon className="pt-2" icon={faPython}/>
                            <FontAwesomeIcon className="pt-2" icon={faGithub}/>
                            <FontAwesomeIcon className="pt-2" icon={faGolang}/>
                            <FontAwesomeIcon className="pt-2" icon={faPython}/>
                        </div>
                    </div>
                </div>
                <div className=" exper-item container border rounded mt-3 w-100">
                    <FontAwesomeIcon className="circle"icon={faCircleArrowRight} color="#FFFFFF"/>
                    <div>
                        <h3>BACKEND DEVELOPER INTERN</h3>
                        <h4 className="text-primary">A2SV|African to Silicon Valley</h4>
                        <small>Feb 2024-June 2024</small>
                        <div className="d-flex flex-wrap gap-1">
                            <h4 className="px-3 text-yellow">skills</h4>
                            <FontAwesomeIcon className="pt-2" icon={faPython}/>
                            <FontAwesomeIcon className="pt-2" icon={faGithub}/>
                            <FontAwesomeIcon className="pt-2" icon={faGolang}/>
                            <FontAwesomeIcon className="pt-2" icon={faPython}/>
                        </div>
                    </div>
                </div>
                <div className="exper-item container border rounded mt-3 w-100">
                    <FontAwesomeIcon className="circle"icon={faCircleArrowRight} color="#FFFFFF"/>
                    <div>
                        <h3>BACKEND DEVELOPER INTERN</h3>
                        <h4 className="text-primary">A2SV|African to Silicon Valley</h4>
                        <small>Feb 2024-June 2024</small>
                        <div className="d-flex flex-wrap gap-1">
                            <h4 className="px-4">skills</h4>
                            <FontAwesomeIcon className="pt-2" icon={faPython}/>
                            <FontAwesomeIcon className="pt-2" icon={faGithub}/>
                            <FontAwesomeIcon className="pt-2" icon={faGolang}/>
                            <FontAwesomeIcon className="pt-2" icon={faPython}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="works w-75 align-item-center py-5 pb-3 h-50">
                < Carousel/>
            </div>
        </div>
    )
}

export default My_work;