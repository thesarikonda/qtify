import React,{useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./Card.css";

const Card = ({id,name,image,follows}) => {

    return(
        <Box id={id} className="song-card">
            <Box className="card-inner">
                <div className="song-image">
                    <img src={image} alt={name}/>
                </div>

                <div className="follows-wrapper">
                    <div className="follows">{follows} FOLLOWS</div>
                </div>                
            </Box>

            <div className="song-name">{name}</div>
        </Box>
    )
}

export default Card;