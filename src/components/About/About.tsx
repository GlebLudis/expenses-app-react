import React, {FC} from "react";
import Button from "@material-ui/core/Button";

export const About: FC = () => {
    type State = {
        isButtonDisabled: boolean;
    };

    const initialState: State = {

        isButtonDisabled: false,
    };


    return (
        <>
            <h4>BUDGET APP</h4>
            <div className="about-button">
                <Button variant="outlined">ABOUT</Button>
            </div>

        </>
    );
};
