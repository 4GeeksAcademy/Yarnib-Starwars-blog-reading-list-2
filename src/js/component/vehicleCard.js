import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


export const VehicleCard  = (props) => {
	return(
                    <div className="fullCard" >
                        <img src={`/img/Vehicles/${(props.data.name.includes("/")) ? props.data.name.replace("/", " ") : props.data.name}.jpg`} width="400px" height="200px" className="CharacterCard-img-top" alt="..."/> 
                        <div className="VehicleCard-body">
                            <h5 className="Card-title">{props.data.name}</h5>
                            <p className="Card-text">Model: {props.data.model}</p>
                            <p className="Card-text">Vehicle-Class: {props.data.vehicle_class}</p>
                            <div className="btDiv">
                                <Link to={`/single/vehicles/${props.id}`}>
                                <button href="#" className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                                <button onClick={() => props.addFavorite(props.data) } type="button" className="btn btn-outline-warning"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></button> 
                            </div>                               
                        </div>
                    </div>              
    )
    
    };

    VehicleCard.propTypes ={
        data : PropTypes.object,
        id: PropTypes.integer
    }

    
