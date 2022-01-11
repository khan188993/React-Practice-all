import react,{useEffect} from "react";

const useTitle = (count) => {
    useEffect(() => {
        // console.log(count);
    
        count<=0?document.title=`count`:document.title = `Count (${count})`
    
       /*  if(count <=0){
            document.title = `Count`
        }else{
            document.title = `Count (${count})`
        } */
        
    }, [count])
}

export default useTitle;




