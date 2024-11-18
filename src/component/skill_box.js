import { faCss3, faGithub, faGofore, faGolang, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillBox=()=>{
return(
    <div className="border p-4 d-flex flex-wrap gap-4 w-lg-50 justify-content-evenly">
        <div className="bg-dark text-warning d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faGithub} size="4x"/>
            <span>Git</span>
        </div>
        <div className="bg-dark text-warning d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faPython} size="4x"/>
            <span>Python</span>
        </div>
        <div className="bg-dark text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faReact} size="4x"/>
            <span>React</span>
        </div>
        <div className="bg-dark text-danger d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faHtml5} size="4x"/>
            <span>Git</span>
        </div>
        <div className="bg-dark text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faCss3} size="4x"/>
            <span>Git</span>
        </div>
        <div className="bg-dark text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faGolang} size="4x"/>
            <span>Git</span>
        </div><div className="bg-dark text-warning d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faJs} size="4x"/>
            <span>Git</span>
        </div>
        <div className="bg-dark text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faDatabase} size="4x"/>
            <span>MongoDB</span>
        </div>
        <div className="bg-dark text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faDatabase} size="4x"/>
            <span>PostgreSQL</span>
        </div>
        

    </div>
)
}
export default SkillBox;