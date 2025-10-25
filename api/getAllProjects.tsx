export default async function getAllProjects() {
    const res = await fetch('https://admin.temarqui.com/wp-json/acf/v3/proyectos?per_page=100');
    const data:any = await res.json();

    const result = data.map((proyecto: any) => {
            return (
                {
                    id: proyecto.id,
                    nombre: proyecto.acf.nombre,
                    imagen_principal_banner: proyecto.acf.imagen_principal_banner.url,
                    categoria: proyecto.acf.categoria.name,
                    ubicacion: proyecto.acf.ubicacion,
                    fecha: proyecto.acf.fecha,
                    estado: proyecto.acf.estado,
                    tamano: proyecto.acf.tamano,
                    equipo: proyecto.acf.equipo,
                    croquis_imagen: proyecto.acf.croquis_imagen.url,
                    nombre_abreviado: proyecto.acf.nombre_abreviado,
                    leyenda: proyecto.acf.leyenda,
                    descripcion: proyecto.acf.descripcion,
                    second_banner: proyecto.acf.second_banner.url,
                    imagen_bim: proyecto.acf.imagen_bim.url,
                    leyenda_bim: proyecto.acf.leyenda_bim,
                    descripcion_bim: proyecto.acf.descripcion_bim,
                    galeria: proyecto.acf.photo_gallery.galeria,
                }
            )
        }
    ).reverse();

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return result;
}
