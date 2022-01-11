import React,{useState,useEffect} from 'react'

const TitleCount = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // console.log(count);

        count<=0?document.title=`count`:document.title = `Count (${count})`

       /*  if(count <=0){
            document.title = `Count`
        }else{
            document.title = `Count (${count})`
        } */
        
    }, [count])

    const onClick = () => {
        setCount((prev)=>prev+1)
    }



    return (
        <div>
            <h1>title {count}</h1>
            <button onClick={onClick}>titleCount</button>
        </div>
    )
}

export default TitleCount
