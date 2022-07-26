import React, {createContext, useReducer} from "react"
import {BlogReducer} from "./blogReducer"
import Blog1 from '../assets/Blog1.svg';
import Blog2 from '../assets/Blog2.svg';
import Blog3 from '../assets/Blog3.svg';
import Blog4 from '../assets/Blog4.svg';
import Blog5 from '../assets/Blog5.svg';
import Blog6 from '../assets/Blog6.svg';
import view from '../assets/Vector (1).svg';

export const blogContext = createContext();


const BlogContextProvider = (props) => {

    const [blogs] = useReducer(BlogReducer, [
        {id: 1, title: '5 Genius Car Accessories You Should Never Drive Without', image: Blog1, discription: 'We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models', postDate:'Posted on October 6th 2021', viewImg: view, views:'563 views' },
        {id: 2, title: '5 Genius Car Accessories You Should Never Drive Without', image: Blog2, discription: 'We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models', postDate:'Posted on October 6th 2021', viewImg: view, views:'563 views' },
        {id: 3, title: 'We provide blow straight past it with the wheels skidding', image: Blog3, discription: 'We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models', postDate:'Posted on October 6th 2021', viewImg: view, views:'563 views' },
        {id: 4, title: 'We provide blow straight past it with the wheels skidding', image: Blog4, discription: 'We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models', postDate:'Posted on October 6th 2021', viewImg: view, views:'563 views' },
        {id: 5, title: '5 Genius Car Accessories You Should Never Drive Without', image: Blog5, discription: 'We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models', postDate:'Posted on October 6th 2021', viewImg: view, views:'563 views' },
        {id: 6, title: '5 Genius Car Accessories You Should Never Drive Without', image: Blog6, discription: 'We provide a full range of front end mechanical repairs for all makes and models We provide a full range of front end mechanical repairs for all makes and models', postDate:'Posted on October 6th 2021', viewImg: view, views:'563 views' },

      ])
      
    return(
        <blogContext.Provider value={{blogs}}>
           {props.children}
        </blogContext.Provider>
    )

}

export default BlogContextProvider;