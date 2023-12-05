import React from "react"
import Lilith from '../assets/lilithv2.png'

export default function Banner() {
    return (
        <div className='header bg-gradient-to-t from-pink-300 via-pink-500 to-pink-600 top-0 w-full '>
            <div className="p-5 md:p-10 py-2"> {/* Utilizando clases responsivas para el padding */}
                <div className="flex flex-col md:flex-row justify-center  rounded-lg bg-black bg-opacity-40">
                    <div className="p-2">
                        <img src={Lilith} alt="?" className="lilithbanner"></img>
                    </div>
                    <div className="p-5 md:p-10 ">
                        <p className="lilithtexto text-white text-center md:text-end"> {/* Utilizando clases responsivas para el texto */}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptates quo necessitatibus atque maxime quidem magni corrupti facere libero culpa praesentium dolores iure eius,optio delectus soluta cumque vel odio!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 /*
<nav>
<div className="bg-black font-sans font-bold py-10 top-0 w-full ">
    <div className="flex justify-center">
        <div className="bg-gray-300 w-[60%] grid grid-cols-6 gap-3 p-3 rounded-full">
            <div className="col-span-2 relative">
                <input 
                    className="placeholder:italic placeholder:text-slate-300 w-full h-full box-border azul p-2 pl-9 border-solid border border-gray-600 rounded-full focus:outline-none focus:border-sky-500"
                    placeholder="Buscar ..."
                    type="text"
                    name="Search"  
                />
                <div className="absolute left-3 top-[50%] translate-y-[-50%]"><FaMagnifyingGlass/></div>
            </div>
            <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300 shadow-md" href="/stock-admin">
                Usuarios
            </Link>
            <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300 shadow-md" href="../stock-user">
                Inventario
            </Link>
            <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300 shadow-md" href="../stock-user/categories">
                Categorias
            </Link>
            <Link className="azul p-2 border-solid border border-gray-600 rounded-full text-center transition ease-in-out delay-150hover:-translate-y-1 hover:scale-110 hover:border-blue-500 duration-300 shadow-md" href="../stock-user/edit-perfil">
                Editar Perfil
            </Link>
        </div>
    </div>
    <div className="flex justify-center">
        <div className="p-2 absolute text-lg">
            <UserInfo></UserInfo>
        </div>
    </div>
</div>
</nav>
*/