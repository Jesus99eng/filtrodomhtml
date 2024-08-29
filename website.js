//Referenciar a mis componentes de html en Javascript
var containerProductos = document.getElementById("containerProductos")
var btnFiltrarCategoria = document.getElementById("btnFiltrarCategoria")
var btnFiltrarMayores50 = document.getElementById("btnFiltrarMayores50")
var btnFiltrarMenores50 = document.getElementById("btnFiltrarMenores50")
var btnEncontrarProdct = document.getElementById("btnEncontrarProducto")
var btnEncontrarID = document.getElementById("btnEncontrarID")

//Usar el evento click y ejecutar una funcion
btnFiltrarCategoria.addEventListener("click",actionBtnFiltrarCategoria )
btnFiltrarMayores50.addEventListener("click",actionBtnFiltrarMayores50 )
btnFiltrarMenores50.addEventListener("click", actionBtnFiltrarMenores50 )
btnEncontrarProdct.addEventListener("click", actionBtnEncontrarProducto )
btnEncontrarID.addEventListener("click", actionBtnEncontrarID )

function actionBtnFiltrarCategoria(){
   let arrayFiltrarCategoria = productosArray.filter(
    item => item.category === "jewelery"
   )
   renderizarProductos(arrayFiltrarCategoria)
}

//mayores a 50 //
function actionBtnFiltrarMayores50(){
    let arrayFiltrarMayores50 = productosArray.filter( item => item.price > 50 )
 
 renderizarProductos(arrayFiltrarMayores50)
 
 }


//menores a 50 //

function actionBtnFiltrarMenores50(){
    let arrayFiltrarMenores50 = productosArray.filter( item => item.price < 50 )
 
 renderizarProductos(arrayFiltrarMenores50)
 
 }
 
 //encontrar producto 9.99//
 
 function actionBtnEncontrarProducto(){
    let arrayEncontrarProducto = productosArray.filter( item => item.price === 9.99 )
 
 renderizarProductos(arrayEncontrarProducto)
 
 }

 //encontrar id 11//
 
 function actionBtnEncontrarID(){
    let arrayEncontrarID = productosArray.filter( item => item.id === 11 )
 
 renderizarProductos(arrayEncontrarID)
 
 }




//Genera un string con html dinamico
function generarUIProducto(producto) {
    return `<div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                <img class="w-1/3 bg-cover h-56 m-6 object-cover bg-landscape"
                    src=${producto.image} />

                <div class="w-2/3 p-4 flex flex-col justify-between">
                    <div>
                        <h1 class="text-2xl line-clamp-1 font-bold text-gray-900">
                            ${producto.title}
                        </h1>
                        <p class="mt-2 line-clamp-3 text-sm text-gray-600">
                            ${producto.description}
                        </p>

                    </div>
                    <div>
                        <div class="flex w-full justify-end">
                            <span class=" bg-teal-700 text-white rounded-full h-6 px-3 ">
                                ${producto.category}
                            </span>

                        </div>

                        <div class="flex justify-between mt-3 item-center">
                            <h1 class="text-xl font-bold text-gray-700">
                                S/${producto.price}
                            </h1>
                            <button class="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                Add to Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>`
}

//Renderiza todos los productor que vengan en un array
function renderizarProductos(array){
    containerProductos.innerHTML = ""

    // for(let i=0; i < array.length; i++){
    //     var productoHTML = generarUIProducto(array[i])
    //     containerProductos.innerHTML += productoHTML
    // }
    
    array.forEach( item => 
        containerProductos.innerHTML += generarUIProducto(item)
    )
    
    // array.map( producto =>
    //     containerProductos.innerHTML +=  generarUIProducto(producto)
    // )
}

renderizarProductos(productosArray)

