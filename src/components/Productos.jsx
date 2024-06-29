import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore"

const Productos = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const querySnapshot = await getDocs(collection(db, "amimevaRopa"))
                
                
                const obtenerDocumentos = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))
                setData(obtenerDocumentos)
                console.log(obtenerDocumentos)
            } catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            {
                data.length > 0 ?
                <div>
                    {
                    data.map(( element ) => (
                        <div key={element.id}>
                            <h2>
                                {
                                    element.nombre
                                }
                            </h2>
                            <h3>
                                {
                                    element.precio
                                }
                            </h3>
                            <div>
                                <img src={element.imagen} />
                            </div>
                            <p>
                                {
                                    element.detalle
                                }
                            </p>
                        </div>                        
                    ))}
                </div>
                :
                <div>
                    <p>
                        Cargando ...
                    </p>
                </div>
            }
        </>
    )
}

export default Productos;