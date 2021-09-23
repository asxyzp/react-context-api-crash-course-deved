import React from 'react'

const Elephant = ({ properties }) => {
    const openLink = () => {
        const url = properties.wikilink;
        window.open(url, '_blank');
    };
    return (
        <div className="card shadow-sm d-flex flex-column justify-content-between col-sm-6 col-md-4 col-lg-3 w-md-75 w-sm-100 m-3 p-4">
            <div className="d-flex flex-column justify-content-start mb-2">
                <h4 className="fw-bolder">{properties.name}</h4>
                <p className="small"><b>TYPE:</b> {properties.species}</p>
                <p className="small"><b>AFFILIATION:</b> {properties.affiliation}</p>
                <em className="small"><b>NOTE:</b> {properties.note}</em>
            </div>
            <button className="btn btn-dark" onClick={openLink}>READ MORE</button>
        </div>
    )
}

export default Elephant;