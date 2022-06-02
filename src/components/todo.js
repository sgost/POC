import React from 'react'
import { Button } from "atlasuikit";
import { useState } from "react";

const Todo = () => {

    const [show, setShow] = useState(false);
    return (
        <>
            <p>{show ? `TEST POC PASS` : `TEST POC FAIL`}</p>
            <Button
                className="primary-blue large"
                label="Primary Button"
                handleOnClick={() => setShow(!show)}
            />
        </>
    )
}
export default Todo;