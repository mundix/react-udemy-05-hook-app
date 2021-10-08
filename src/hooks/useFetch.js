import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setState({ data: null, loading: true, error: null }); //reinicio los valores para qeu salga el loading
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setState({
                    loading: false,
                    error: null,
                    data
                });

            });
    }, [url]);

    //solo regresamos el state
    return state;
}
