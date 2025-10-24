export type Post = {
    id: string,
    permalink: string,
    media_url: string,
    caption: string,
    media_type: string,
    thumbnail_url?: string,
  }

export type FeedData = {
    feedData: Post[]
  }


export type ProyectosData = {
    proyectosData: Proyecto[]
  }

export type Proyecto = {
    id: number,
    nombre: string,
    tipo_proyecto?: string,
    imagen_principal_banner: string,
    categoria: string,
    ubicacion: string,
    fecha: string,
    estado: string,
    tamano: string,
    equipo: string,
    croquis_imagen: string,
    nombre_abreviado: string,
    leyenda: string,
    descripcion: string,
    second_banner: string,
    imagen_bim: string,
    leyenda_bim: string,
    descripcion_bim: string,
    galeria: any,
}
