import React, {useEffect, useState} from 'react'
import style from './style/PageFormat.css'
import TextBox from "../components/TextBox";
import GamesContainer from "../components/GamesContainer";
import Loading from "../components/Loading";
import $ from 'jquery'

const Games = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
     fetch("http://127.0.0.1:8000/api/games")
         .then(res => res.json())
         .then(
             (result) => {
                 setIsLoaded(true);
                 setData(result);
             },
             (error) => {
                 setIsLoaded(true);
                 setError(error);
             }
         )
         .catch(error => {
             console.log(error)
         })
    },[])

    if (error) {
        console.log(error.message)
    }
    else if (!isLoaded){
        console.log("Loading ...")

        return (
            <Loading />
        )
    }
    else {
        console.log(data);
        return (
            <div className='content'>
                <TextBox textBoxContent={arr}/>
                <GamesContainer name={'games'} games={arrGames}/>
                <GamesContainer name={'projects'} games={arrProjects}/>
            </div>
        )
    }



}
export default Games

function contentFormat(){
    return(
        <div className='content'>
            <TextBox textBoxContent={arr}/>
            <GamesContainer name={'games'} games={arrGames}/>
            <GamesContainer name={'projects'} games={arrProjects}/>
        </div>
    )

}

const arr = [
    {name: 'title', content: 'Title'},
    {name: 'sub-title', content: 'Sub-title'},
    {name: 'text', content: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ' +
            'ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius,' +
            ' est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris.' +
            ' Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed' +
            ' rutrum arcu pellentesque suscipit convallis.'},
    {name: 'sub-title', content: 'Sub-title'},
    {name: 'text', content: 'Vivamus nec sapien varius, pretium tortor eget, vestibulum purus. Donec scelerisque ' +
            'ut tortor et egestas. Fusce id porttitor velit. Suspendisse accumsan, velit sed pellentesque varius,' +
            ' est enim suscipit lectus, quis varius ipsum erat ut nulla. Ut eu tincidunt enim, et aliquam mauris.' +
            ' Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed' +
            ' rutrum arcu pellentesque suscipit convallis.'},
    {name: 'list', content: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Integer tristique enim sed viverra sollicitudin.',
                'Pellentesque fermentum mi ut turpis mattis, ut tristique nunc ullamcorper.',
                'Nullam viverra sollicitudin laoreet. Fusce vel dui diam. In at lorem nisl.',
                'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
                'Nullam magna dui, luctus nec metus at, aliquet molestie leo.',
        ]}
]

const arrGames = [
    {
        name: 'Hollow Knight',
        coverImg: 'https://picsum.photos/300/200',
        description: 'chalenging metroidvanya platformer',
        link: 'hollowknight'
    },
    {
        name: 'testle',
        coverImg: 'https://picsum.photos/300/200',
        description: 'pssssssssssssshhhh',
        link: 'testle'
    }
]
const arrProjects = [
    {
        name: 'Dead Cells',
        coverImg: 'https://picsum.photos/300/200',
        description: 'chalenging rouge platformer',
        link: 'deadcells'
    }
]

