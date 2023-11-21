

const PuppyDetails = ({setShowDetails, puppyList} ) => {
    return (
        <>
        <h2>Puppy Details</h2>
        {puppyList.map((singlePuppyName) => {
            console.log(singlePuppyName.name)
            return (
                <li>{singlePuppyName.name}</li>
            )})}
        <button onClick={() =>(setShowDetails(false))}>Back</button>
        </>
)}

export default PuppyDetails