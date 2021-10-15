import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(()=>{
        return ()=>{
            isMounted.current = false;
        }
    }, []);


    useEffect(() => {
        setState({ data: null, loading: true, error: null }); //reinicio los valores para qeu salga el loading
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                // setTimeout(() => {
                    if(isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });    
                    } else {
                        // console.log('setState no se llamo');
                    }
                // }, 4000);

            })
            .catch(() =>{
                setState({
                    data: null,
                    loading: false,
                    error: 'No se puso cargar la info'
                })
            });
    }, [url]);

    //solo regresamos el state
    return state;
}
