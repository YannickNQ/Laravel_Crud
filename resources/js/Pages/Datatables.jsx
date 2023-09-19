import { StyledEngineProvider } from '@mui/material/styles';
import ChirpTable from '@/Components/ChirpTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const Datatables = ({ auth }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {
        if (isLoading) {
            // const getChirps = async () => {
            //     try {
            //         const response = await fetch('http://localhost:8000/api/chirps')
            //         if (response.ok) {
            //             let localData = await response.json();
            //             // console.log(localData)
            //             setData(localData);
            //             setError(null);
            //             setIsLoading(false);
            //         } else {
            //             setError({ title: 'Error al obtener', desc: response.ok })
            //         }
            //     } catch (error) {
            //         setError({ title: 'Error', desc: error })
            //     }
            // }
            fetch('http://localhost:8000/api/chirps')
                .then((response) => {
                    if (response.ok) console.log("all ok");
                    return response.json()
                })
                .then(data => {
                    setIsLoading(false);
                    console.log(data)
                    return setData(data)
                })
                .catch(err => {
                    setError('Error al hacer la peticion')
                    setData(undefined)
                })
            // getChirps();
        }
    }, [isLoading])

    return (<>
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Datatables</h2>}
        >
            <Head title="Datatables" />

            <div className="pt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {isLoading
                    ? <b>loading...</b>
                    : <ChirpTable rows={data} />
                }
            </div>
        </AuthenticatedLayout>
    </>)
}
export default Datatables