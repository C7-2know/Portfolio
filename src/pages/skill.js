import {  faBook, faCode, faFootballBall, faHiking, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillBox from "../component/skill_box";

const Skills=()=>{
    return(
        <div className="d-flex flex-column gap-5 align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <h2 className="text-primary">What I Do</h2>
                <p>adhfnoawiehncoian aisdnf oiawehnc auisnd fiuysdnfo humanaijsndfiwneoifhnasoiefn jdhfnicne oiaje fonsnd frontednd backend AI/ML and other machine learncing  </p>
                <div className="d-flex p-4 px-1 gap-1">
                    <div className="col col-1">
                        <FontAwesomeIcon  icon={faCode} color="#306000"/>
                        <h3 className=" vertical-text">Programming </h3>
                    </div>
                    <div className="col-7">
                        <SkillBox/>
                    </div>
                </div>
                </div>
            <div className="d-flex flex-wrap gap-4 mx-2">
                <div className=" col-4 px-5 w-50 mx-1">
                    <div className="p-2">
                        <h2 className="text-primary">LANGUAGE </h2>
                        <div className="px-4">
                            <p>Amharic - Native</p>
                            <p>English - fluent</p>
                        </div>
                    </div>
                    <div className="mt-3 p-2">
                        <h2 className="text-primary">Personal skills</h2>
                        <p className="px-3">Good communication, Team Work,Problem solving</p>
                        
                    </div>
                </div>
                <div className=" col-5 d-flex flex-column align-items-center justify-content-center">
                    <h2>HOBBIES & INTERESTS</h2>
                    <div className="px-lg-5 d-flex gap-2 flex-wrap">
                        <div className="p-3 align-items-center rounded-circle border">
                            <FontAwesomeIcon icon={faPlane} size="2x" />
                        </div>
                        <div className="p-3 align-items-center rounded-circle border">
                            <FontAwesomeIcon icon={faBook} size="2x" />
                        </div>
                        <div className="p-3 align-items-center rounded-circle border">
                            <FontAwesomeIcon icon={faFootballBall} size="2x" />
                        </div>
                        <div className="p-3 align-items-center rounded-circle border">
                            <FontAwesomeIcon icon={faHiking} size="2x" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Skills;