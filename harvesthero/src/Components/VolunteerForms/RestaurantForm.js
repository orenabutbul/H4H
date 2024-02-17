import React from "react";

export default class RestaurantForm extends React.Component {
    state = {

    };

    render()
    {
        return (
            <form>
                <label>Address</label>
                <input type="text" id="Addr" name="Addr" placeholder="Address"></input>
                <br></br>
                <br></br>

                <label>Cell Phone Number</label>
                <br></br>
                <br></br>


                <label>Available Food</label>
                <br></br>
                <br></br>

                <label>Expiration Date of Food</label>
                <br></br>
                <br></br>

                <label></label>

            </form>
        );
    }
}
