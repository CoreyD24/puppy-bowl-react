import { useState } from "react"
import { useEffect } from "react"

const PuppyList = () => {
    const [puppyData, setPuppyData] = useState({})
    useEffect (() =>{
        const listedPuppies = async () =>{
            const data = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`)
            const responseJson = await data.json()

            //not sure what i'm doing wrong. can't get puppyData set to anything
            
            //console.log(responseJson.data.players);
            puppyData = responseJson.data
            console.log(puppyData)
        }
        listedPuppies();
    }, [])}

export default PuppyList