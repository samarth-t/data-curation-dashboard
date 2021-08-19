import React from "react"
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function InfoItem(props) {
    return (
        <div className="info-item" onClick={() => props.handleClick(props.item)}>
            {/* <Button
            fullWidth = {true}
            color="primary"
            >
                {props.item.text}
            </Button> */}
            
            <ListItem button>
                <ListItemText primary={props.item.text} />
            </ListItem>
        </div>
    )
}

export default InfoItem