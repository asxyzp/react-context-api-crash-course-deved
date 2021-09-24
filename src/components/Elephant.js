import React from 'react'

/**
 * FUNCTION : Elephant COMPONENT
 * FUNCTIONALITY : DISPLAYS CARD CONTAINING DETAILS OF THE ELEPHANT
 * @param {*} { properties } : DESTRUCTRED OBJECT CONTAINING properties 
 * @returns JSX<Element> 
 */
const Elephant = ({ properties }) => {

    /**
     * FUNCTION : openLink()
     * FUNCTIONALITY : OPENING LINK IN A SEPARATE TAB
     * @param : UNDEFINED
     * @return : UNDEFINED
     */
    const openLink = () => {
        const url = properties.wikilink;
        window.open(url, '_blank');
    };

    /**
     * FUNCTION : getParentElement(event)
     * FUNCTIONALITY : GETTING PARENT ELEMENT
     * @param {*} event : EVENT OBJECT
     * @returns PARENT ELEMENT OBJECT
     */
    const getParentElement = (event) =>{
        const hoverElement = event.target;
        let parent = hoverElement;

        //HOVERD ELEMENT CAN BE THE ELEMENT CONTAINING ".card" OR A CHILD OF IT
        if(hoverElement.classList.contains("card"))
            parent = hoverElement;
        else
            while(!parent.classList.contains("card")){
                parent = parent.parentElement;    
            }
        return parent;
    };

    /**
     * FUNCTION : showShadow(event)
     * FUNCTIONALITY : SHOWS LARGE SHADOW ON CARD ON HOVER
     * @param {*} event : EVENT OBJECT
     * @return : UNDEFINED 
     */
    const showShadow = (event) =>{
        const parent = getParentElement(event);        
        parent.classList.add("shadow");
        parent.classList.remove("shadow-sm");
    };


    /**
     * FUNCTION : hideShadow(event)
     * FUNCTIONALITY : HIDES LARGE SHADOW ON CARD ON HOVER
     * @param {*} event : EVENT OBJECT
     * @return : UNDEFINED 
     */
    const hideShadow = (event) =>{
        const parent = getParentElement(event);
        parent.classList.add("shadow-sm");
        parent.classList.remove("shadow");
    };

    //RETURNING THE JSX ELEMENT
    return (
        <div onMouseEnter={showShadow} onMouseLeave={hideShadow} className="card shadow-sm d-flex flex-column justify-content-between col-sm-6 col-md-4 col-lg-3 w-md-75 w-sm-100 m-3 p-4">
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