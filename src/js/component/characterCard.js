import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



export const CharacterCard  = (props) => {
	return(
                    <div className="fullCard" >
                        <img src={`/img/Characters/${(props.data.name.includes("/")) ? props.data.name.replace("/", " ") : props.data.name}.jpg`} width="400px" height="200px" className="CharacterCard-img-top" alt="..."/> 
                        <div className="CharacterCard-body">
                            <h5 className="Card-title">{props.data.name}</h5>
                            <p className="Card-text">Gender: {props.data.gender}</p>
                            <p className="Card-text">Hair-Color: {props.data.hair_color}</p>
                            <p className="Card-text">Eye-Color: {props.data.eye_color}</p>
                            <div className="btDiv">
                                <Link to={`/single/characters/${props.id}`}>
                                <button href="#" className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                                <button onClick={() => props.addFavorite(props.data) } type="button" className="btn btn-outline-warning heartIcon"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button> 
                            </div>                               
                        </div>
                    </div>              
    )
    
    };

    CharacterCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    