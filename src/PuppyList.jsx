import { useState } from "react"
import { useEffect } from "react"

const PuppyList = () => {
    const [puppyList, setPuppyList] = useState([])
    useEffect (() =>{
        const getPuppies = async () =>{
            try {
                const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`)
                const responseJson = await response.json();
                const puppies = responseJson.data.players
                setPuppyList(puppies)
                console.log(puppies)
            } 

            catch (error) {
                console.log(error)
            }
        }
        getPuppies();
    },[])

    return(
        <>
        <h2>Puppy Names</h2>
        {puppyList.map((singlePuppyName) => {
            return <li key={singlePuppyName.id}>{singlePuppyName.name}</li>
        })
        }
        </>
    )
}

export default PuppyList