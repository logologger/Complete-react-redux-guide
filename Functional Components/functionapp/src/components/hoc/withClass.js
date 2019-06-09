import React from 'react';

const withClass = (WrappedComponent , classNames) => {
    return (props) => (
        <div className = {classNames}>
            <WrappedComponent></WrappedComponent>
        </div>
    )
}

export default withClass;