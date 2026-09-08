// src/data/artistas.ts

import { url } from "astro:schema";

export const artistas = [
  {
    slug: "los-hermanos-barron",
    imagen: "/Cartelera/barron.avif",
    fecha: "11 Septiembre 2026",
    nombre: "Los Hermanos Barron",
    genero: "Norteño / Rancheras",
    im: "/Artistas/Barron-im.avif",
    imMobile: "/Artistas/Barron-im-mov.avif",

    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Los Hermanos Barrón son una de las agrupaciones con mayor trayectoria y reconocimiento de la música popular del norte de México. Originarios de Río Bravo y criados en Allende, Coahuila, han llevado su particular estilo y sus canciones a distintas generaciones de público.Con una historia musical que comenzó en la década de 1950, el grupo se consolidó como El Conjunto Sabor de Los Hermanos Barrón, destacando por sus interpretaciones de música norteña, tropical y cumbia. `,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Balete Tortuga`,
    can2nom: `El Gavilan Pollero`,
    can3nom: `16 Toneladas`,
    can4nom: `Mamitas Rezando`,
    can5nom: `16 toneladas`,

    can1noml: `https://open.spotify.com/intl-es/track/5BfvXLQiMaFAWKwK8Cbawn?si=08830210a9e549bb`,
    can2noml: `https://open.spotify.com/intl-es/track/1Dfgf18Jd8VLpmctKvxgX2?si=a6c5c008098d45e6`,
    can3noml: `https://open.spotify.com/intl-es/track/0Vfc37MJFxlhE7eevaSgqO?si=2f72040784a74492`,
    can4noml: `https://open.spotify.com/intl-es/track/6yroBD36FCoxtZpzaTeAeE?si=ce4747d8a3184e08`,
    can5noml: `https://open.spotify.com/intl-es/track/722LbyOteQAvvDb3FdH4rp?si=0100825d9a0d43df`,

    // imagenes
    url1: "https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/1.avif",

    url2: "https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/2.avif",

    url3: "https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/3.avif",

    url4: "https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/4.avif",
    // Boletos
    vip: false,
  },
  {
    slug: "banda-tierra-sagrada",
    imagen: "/Cartelera/tierra.avif",
    nombre: "Banda Tierra Sagrada",
    fecha: "12 Septiembre 2026",
    genero: "Banda sinaloense / Regional mexicano",
    im: "/Artistas/tierra-mv.avif",
    imMobile: "/Artistas/tierra-mv.avif",

    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Banda Tierra Sagrada es una agrupación de música regional mexicana originaria de Mazatlán, Sinaloa, reconocida por su estilo de banda, energía y canciones que han conectado con el público mexicano. Con más de una década de trayectoria, se ha consolidado como una de las agrupaciones destacadas de la escena regional mexicana.

Formada en 2011, la agrupación surgió después de la etapa de sus integrantes como Banda Tierra Santa, proyecto con el que acompañaron durante años a José Ángel Ledesma, “El Coyote”.`,
    facebook: `https://www.facebook.com/BandaTierraSagrada?locale=es_LA`,
    youtube: `https://www.youtube.com/@BandaTierraSagradaOficial`,
    spotify: `https://open.spotify.com/intl-es/artist/0v7JYEoQOQbzNNESKwxmzT`,

    // canciones
    can1nom: `La Buena y La Mala`,
    can2nom: `El Bueno y El Malo`,
    can3nom: `Soy un Desmadre`,
    can4nom: `Asi te Quiero Yo`,
    can5nom: `Provocame`,

    can1noml: `https://open.spotify.com/intl-es/track/4y0n8xKuEKE0J2sThzswhg?si=b442661a19b14547`,
    can2noml: `https://open.spotify.com/intl-es/track/0sGZWfVTPWIv6qbWZZ7cdT?si=656e4ed317484fba`,
    can3noml: `https://open.spotify.com/intl-es/track/2TD8LyMFCqStcDdGbEt0kP?si=6715a664050446ba`,
    can4noml: `https://open.spotify.com/intl-es/track/2F3swc62MyWQ968T3ia3Y7?si=58086e26e6544a1a`,
    can5noml: `https://open.spotify.com/intl-es/track/3wnpHn5p1XuiNSNOCJOCxs?si=02dba852ff3c4d53`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/5.avif`,
    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/6.avif`,
    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/7.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/8.avif`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-xf2Rm`,
  },
  {
    slug: "sonido-mazter",
    imagen: "/Cartelera/mazter.avif",
    nombre: "Sonido Mazter",
    fecha: "13 Septiembre 2026",
    genero: "Cumbia / Música tropical",
    im: "/Artistas/master-mv.avif",
    imMobile: "/Artistas/master-mv.avif",

    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Sonido Mazter es una de las agrupaciones más representativas de la cumbia y música grupera de Coahuila. Originarios de Monclova, Coahuila, son conocidos como “El Sonido de Acero” y han construido una trayectoria de décadas con un estilo que combina la cumbia con influencias norteñas.

Formado en 1989, el grupo alcanzó gran popularidad durante la década de los 90 con éxitos como “El Último Beso”, “Falsa Traición”, “Este Dolor” y “Quiéreme”. `,
    facebook: `https://www.facebook.com/elsonidomazter?locale=es_LA`,
    youtube: `hhttps://www.youtube.com/channel/UCWvR61KarjHhkReCSMGsosQ`,
    spotify: `https://open.spotify.com/intl-es/artist/2Je9VeZnmnpDrCIwWu3wuM`,

    // canciones
    can1nom: `El Ultimo Beso`,
    can2nom: `Casi Siempre Estoy Pensando En Ti`,
    can3nom: `Falsa Traicion`,
    can4nom: `Quiereme`,
    can5nom: `Muchacho Pobre`,

    can1noml: `https://open.spotify.com/intl-es/track/7mqZwyrBDcigRXoUYIdx0m?si=aa1e2d45abe54a84`,
    can2noml: `https://open.spotify.com/intl-es/track/313aLoAv5EAuPDxXqpFTIe?si=ef6983e3acb24ae9`,
    can3noml: `https://open.spotify.com/intl-es/track/5loQiXgVxhk3OuU8ljUnAH?si=4b233abb26b74adb`,
    can4noml: `https://open.spotify.com/intl-es/track/533br4LGnpDXIMzqjbLHfh?si=e409e98c67224bd3`,
    can5noml: `https://open.spotify.com/intl-es/track/1L3IORJ1HMuXY5vPbmUFYs?si=34b39e4c315b4151`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/9.avif`,

    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/10.avif`,

    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/11.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/12.avif`, // Boletos
    vip: false,
    linkVip: ``,

    //demas
  },
  {
    slug: "los-invasores-de-nuevo-leon",
    imagen: "/Cartelera/invasores.avif",
    nombre: "Los Invasores de Nuevo León",
    fecha: "14 Septiembre 2026",
    genero: "Norteño / Corridos / Rancheras",
    im: "/Artistas/invasores-mv.avif",
    imMobile: "/Artistas/invasores-mv.avif",

    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Los Invasores de Nuevo León son una de las agrupaciones más emblemáticas e influyentes de la música norteña y regional mexicana. Originarios de Monterrey, Nuevo León, han construido una trayectoria de más de cuatro décadas, convirtiéndose en referentes del género y llevando su música a generaciones de seguidores en México y Estados Unidos.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: ` Mi casa Nueva`,
    can2nom: `Playa Sola`,
    can3nom: `A Mi, Que me Quedo?`,
    can4nom: `Laurita Garza`,
    can5nom: `Aguanta Corazon`,

    can1noml: `https://open.spotify.com/intl-es/track/0YqxST7jMa8B4Ecr1675u6?si=c42af37b364142fe`,
    can2noml: `https://open.spotify.com/intl-es/track/0mzpP5g8OCOj3dCtowPAjV?si=6432425798014381`,
    can3noml: `https://open.spotify.com/intl-es/track/0b72rOmkspR8dJHsUjaVi4?si=d7a985d1a5304f54`,
    can4noml: `https://open.spotify.com/intl-es/track/7a5msYrIHJ1bx7pTLKVbZ9?si=c4153ab6160a4ae8`,
    can5noml: `https://open.spotify.com/intl-es/track/6E5gZOwEMVED0hNBeaTu9k?si=9581eb918824439b`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/13.avif`,

    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/14.avif`,

    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/15.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/16.avif`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-yCesK`,
  },
  {
    slug: "mister-chivo",
    imagen: "/Cartelera/chivo.avif",
    nombre: "Mister Chivo",
    fecha: "15 Septiembre 2026",
    genero: "Tropical / Cumbia / Grupero",
    im: "/Artistas/chivo-mv.avif",
    imMobile: "/Artistas/chivo-mv.avif",

    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Mister Chivo es una de las agrupaciones más reconocidas de la música tropical y cumbia mexicana. Originarios de Ciudad Miguel Alemán, Tamaulipas, comenzaron su historia musical en la década de los 70 y se distinguieron por su estilo alegre, bailable y su particular combinación de cumbia, música romántica y sonidos gruperos.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `La LLorona`,
    can2nom: `Soy Dracula`,
    can3nom: `El Tocadiscos`,
    can4nom: `Cumbia Disquete`,
    can5nom: `La Gallinita`,

    can1noml: `https://open.spotify.com/intl-es/track/2XPguqYrDNzh1XsHKX1LtG?si=fc12f0894fab48e9`,
    can2noml: `https://open.spotify.com/intl-es/track/6qBeoNdWrjx5A9rMEGMrQx?si=a4c6c4f5ea984c09`,
    can3noml: `https://open.spotify.com/intl-es/track/5gVglj2JqOk1WxfrDEGBof?si=a14cf83aecae4648`,
    can4noml: `https://open.spotify.com/intl-es/track/1IOsllg74916ZLhSgUF67o?si=aa63c5bf6dba4a37`,
    can5noml: `https://open.spotify.com/intl-es/track/5FRNxqu1sRAQXPWUPCTAHi?si=1a5de58b46c14f60`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/17.avif`,

    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/18.avif`,

    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/19.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/20.avif`, // Boletos
    vip: false,
    linkVip: ``,
  },
  {
    slug: "marca-registrada",
    imagen: "/Cartelera/marca.avif",
    nombre: "Grupo Marca Registrada",
    fecha: "16 Septiembre 2026",
    genero: "Regional mexicano / Norteño / Corridos",
    im: "/Artistas/marca-mv.avif",
    imMobile: "/Artistas/marca-mv.avif",

    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Grupo Marca Registrada es una de las agrupaciones más destacadas de la nueva generación del regional mexicano. Originarios de Culiacán, Sinaloa, el grupo se caracteriza por combinar la música norteña y los corridos con una producción moderna, logrando conectar con una nueva generación de seguidores en México, Estados Unidos y Latinoamérica.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Di Que Si`,
    can2nom: `Hoy Todo Cambio`,
    can3nom: `Elovrga`,
    can4nom: `El Rescate`,
    can5nom: `El Mayor De Las Ranas`,

    can1noml: `https://open.spotify.com/intl-es/track/3J6d00TsKXTJV9zSJwEOd9?si=e1241e4b373b48bf`,
    can2noml: `https://open.spotify.com/intl-es/track/1tinKBj5pMxJswRan96Mj7?si=6d0bff6924ae44c8`,
    can3noml: `https://open.spotify.com/intl-es/track/2TJKY0WSFufZOzbRNgl6zE?si=31aa2077aa584b47`,
    can4noml: `https://open.spotify.com/intl-es/track/147A9xW2QqtbFGCj00ZR8I?si=c0584610c52140f6`,
    can5noml: `https://open.spotify.com/intl-es/track/7mEPibyVIOAjjHcSD0K0vn?si=412d6a4875ad4589`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/21.avif`,

    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/22.avif`,

    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/23.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/24.avif`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/marca-registrada-feriexpo-coah-2026-NWS6g`,
  },
  // {
  //   slug: "la-firma",
  //   imagen: "/Cartelera/firma.avif",
  //   nombre: "La Firma",
  //   fecha: "17 Septiembre 2026",
  //   genero: "Grupero / Norteño / Tex-Mex",
  //   im: "/Artistas/firma-mv.avif",
  //   imMobile: "/Artistas/firma-mv.avif",
  //   hora: "10:00 PM",
  //   lugar: "Recinto Ferial Sabinas, Coahuila",
  //   // Info
  //   info: `La Firma es una reconocida agrupación de música regional mexicana originaria de San Nicolás de los Garza, Nuevo León. Su propuesta se caracteriza por combinar el estilo grupero y norteño con elementos de cumbia, pop, balada y otros ritmos latinos, creando un sonido propio que los ha distinguido durante décadas.`,
  //   facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
  //   youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
  //   spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

  //   // canciones
  //   can1nom: `Le Dire`,
  //   can2nom: `Cerquita De Ti`,
  //   can3nom: `Si Ella Supiera`,
  //   can4nom: `Como Olvidarla`,
  //   can5nom: `Ahora Que Estas Conmigo`,

  //   can1noml: `https://open.spotify.com/intl-es/track/1spvvISCt2fPLjCWT25Oi9?si=dfb4107e613c4c0c`,
  //   can2noml: `https://open.spotify.com/intl-es/track/45iCrerFJidDXPudKZr5KN?si=df0be3f02f67458a`,
  //   can3noml: `https://open.spotify.com/intl-es/track/3fbAMckQHANcL1Y9bHQDYg?si=9bf8721d2bc54813`,
  //   can4noml: `https://open.spotify.com/intl-es/track/4oHEebE3q51eVfrIthLXPn?si=10227d9b7a3547c9`,
  //   can5noml: `https://open.spotify.com/intl-es/track/7iaQDqknJVoVGlgfRatPNQ?si=aed7ee80dc714ed8`,

  //   // imagenes
  //   url1: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/652161210_122245272398154922_8671534581908032054_n.jpg?stp=c240.0.960.960a_cp6_dst-jpg_tt6&cstp=mx960x960&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEmeLKopdkzvH_S-or_4lCSKX6XJC3Ob-opfpckLc5v6jPb8tMqLk36D4-fJ6gk7D2QzyMU7p9mKoOaJAUerNWC&_nc_ohc=EQ7paSzcWPoQ7kNvwFRYeyc&_nc_oc=AdpF8i92srlhzEcRpbCqRWhbSPYYHq0D9vOPbedpZ2B3Vi2KYMTMU72uY1vtD7K3-LpaDzx9JfugyMQ2t-yBPDzE&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=70cCWkSzDZFN_d_T783Cyg&_nc_ss=7b2a8&oh=00_AQGb0DTiEVl22SY6zM4gLS78y7h6sYbicaAPyX4Kg3RCtw&oe=6A8847D8`,

  //   url2: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/637681397_122242413452154922_753762547067643666_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEI3TcGdml3Xl26Q8k3fLnlxsHfiQqsFkbGwd-JCqwWRmLk51-ByjluLTNzGxS5jwrvZVS9IXtIDGIsRY_S6WS5&_nc_ohc=t4Q1g8-uRX0Q7kNvwGEt7YG&_nc_oc=Adp11ZneU7brCh-TginV1CmR2d62C4WK45bJ6Kt6hnrJtWRi5sST8w_sTAkffd3fPCRI9XlRQew11lM4E5h7Fbrw&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=uMA-4vplTpVVvBRyqLsH3A&_nc_ss=7b2a8&oh=00_AQF_QJWTbU9BXoAQWiYK4xinf-GKFH686SQzanse_L3Xiw&oe=6A88416B`,

  //   url3: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/636721698_122242413404154922_2045429419927848276_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHwCLugQzvUY3HgR3pxClFS_4lg-ql2Vpv_iWD6qXZWmwGuKd8Cf8R0e6_CHUwWuYVKFZhndE_9rx-T0dabW22L&_nc_ohc=J9LXI-Cw4ToQ7kNvwFvsYKU&_nc_oc=AdrgrhoTpyndLfnaNV2IIKCJftsz2OSDZhM5wYIvQzUBA-wniT63FRkuv4F4_o4sQ5v50i9QPOxt_WwAcBpvEztq&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=uMA-4vplTpVVvBRyqLsH3A&_nc_ss=7b2a8&oh=00_AQHmlsJONnndXhM9twCmeeckoUERi8J5roJop8sxINi_Yg&oe=6A884F0B`,

  //   url4: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/536270272_122219999720154922_5750609189001478134_n.jpg?stp=c0.158.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGOxaQnZj32qnTjI8zZDTK3uqsG6mMzPEG6qwbqYzM8Qa2ZrkKG4RProSKcQrc2hsQagau5anKnbNg89dEUQXAi&_nc_ohc=Pgb84GEjECoQ7kNvwGO_TEE&_nc_oc=AdqWy9_BnESCCwv90HzBGNfKkrSumJ-3ogwejhfvq1lNB9ByGFPNFHjXddQrAe_lB9p7jFd0RoA62aCr9RSsQQIw&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=u_HMdKpCIRPvSko35wx4Tg&_nc_ss=7b2a8&oh=00_AQGkt6KCLeEneXHlX3CScMhmIPq1PEQ4caZbeQ3i5YKqNQ&oe=6A883F4E`, // Boletos
  //   vip: true,
  //   linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-TRddO`,
  // },
  {
    slug: "leandro-rios",
    imagen: "/Cartelera/leandro-firma.avif",
    nombre: "Leandro Rios / La Firma",
    fecha: "17 Septiembre 2026",
    genero: "Norteño / Corridos / Regional mexicano",
    im: "/Artistas/leandro-firmaa.avif",
    imMobile: "/Artistas/leandro-mv.avif",
    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Leandro Ríos, conocido como “El Penco”, es uno de los exponentes destacados de la nueva generación de la música norteña. Originario de Los Ramones, Nuevo León, La Firma es una reconocida agrupación de música regional mexicana originaria de San Nicolás de los Garza, Nuevo León. Su propuesta se caracteriza por combinar el estilo grupero y norteño con elementos de cumbia, pop, balada y otros ritmos latinos .`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Debajo Del Sombrero`,
    can2nom: `Un Poco Tarde`,
    can3nom: `Ojitos Al Reves`,
    can4nom: `Y Como Es El`,
    can5nom: `Chi Pon Chi Pon`,

    can1noml: `https://open.spotify.com/intl-es/track/1WxHPhfIClKbpSnPPHnkF4?si=be811652014f4143`,
    can2noml: `https://open.spotify.com/intl-es/track/72EO1dmubzXwuINokrNfX6?si=33d14158b913432f`,
    can3noml: `https://open.spotify.com/intl-es/track/5HkeL8fpwh26J2iEVP6iLB?si=05ac07b9e9f443f4`,
    can4noml: `https://open.spotify.com/intl-es/track/3Okq45PwqM9RHFemRt8JQ6?si=9878f5b30fee4dda`,
    can5noml: `https://open.spotify.com/intl-es/track/15ZK0RYlJJ2rebPt7hlCsv?si=2b2dda33f2524e8d`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/25.avif`,

    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/26.avif`,

    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/27.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/28.avif`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-TRddO`,
  },

  {
    slug: "maria-jose",
    imagen: "/Cartelera/maria.avif",
    nombre: "Maria Jose",
    fecha: "18 Septiembre 2026",
    genero: "Pop latino / Dance-pop",
    im: "/Artistas/maria-mv.avif",
    imMobile: "/Artistas/maria-mv.avif",
    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `María José es una de las voces femeninas más reconocidas del pop mexicano. Originaria de Ciudad de México, inició su carrera formando parte del grupo Kabah, una de las agrupaciones pop más importantes de los años 90, antes de comenzar una exitosa etapa como solista.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Prefiero Ser Su Amante`,
    can2nom: `Me Equivoque`,
    can3nom: `Lo Que Tenias Conmigo`,
    can4nom: `Resistire`,
    can5nom: `No Soy Una Señora`,

    can1noml: `https://open.spotify.com/intl-es/track/4hdIORk57S3av6dKI9JRDz?si=891da4a287184af2`,
    can2noml: `https://open.spotify.com/intl-es/track/0mjwigpuvO4IAAMtoNoUyQ?si=4009be91273642ff`,
    can3noml: `https://open.spotify.com/intl-es/track/0X6coWomPnfGLXQ6gdi3cI?si=94ed1bfa346f49d2`,
    can4noml: `https://open.spotify.com/intl-es/track/0XFQb7pNfT90A7fRxjMWgz?si=cb4fdf2a81b144d4`,
    can5noml: `https://open.spotify.com/intl-es/track/6NUh68V6ikd96sTiUCH6ID?si=bfb41dd3c1b4413b`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/29.avif`,

    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/30.avif`,

    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/31.avif`,

    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/32.avif`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/marca-registrada-feriexpo-coah-2026-uLJ6P`,
  },
  {
    slug: "la-casetera",
    imagen: "/Cartelera/casetera.avif",
    nombre: "La Casetera",
    fecha: "19 Septiembre 2026",
    genero: "Pop en español / Dance / Retro",
    im: "/Artistas/casetera-mv.avif",
    imMobile: "/Artistas/casetera-mv.avif",
    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `La Casetera es una agrupación regiomontana que ha conquistado al público con un espectáculo lleno de nostalgia, energía y grandes éxitos de la música popular. Originaria de Monterrey, Nuevo León, su propuesta revive clásicos de los años 80, 90 y 2000, combinando géneros como la cumbia, grupero, tejano y música tropical.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Tributo a Grupo Limite Medley`,
    can2nom: `Si Una Vez`,
    can3nom: `Inmortales Medley`,
    can4nom: `Reinas Gruperas Medley`,
    can5nom: `Tributo a Selena Medley`,

    can1noml: `https://open.spotify.com/intl-es/track/63yP7NifUiUARQlBPET4ol?si=7ce295e36cb84d87`,
    can2noml: `https://open.spotify.com/intl-es/track/4eXuwrDaq0sZM5EBbeboL1?si=9564be15fa0146e2`,
    can3noml: `https://open.spotify.com/intl-es/track/3B8XAAB1j59uwrCfXntXcO?si=4da3af9bc27342af`,
    can4noml: `https://open.spotify.com/intl-es/track/4gWlhj49xHA4ixLnjXE1a5?si=234e728f01d54266`,
    can5noml: `https://open.spotify.com/intl-es/track/0H5RMcttSG4lIu7JwAtWHI?si=21d6874c2c0d4ebd`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/33.avif`,
    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/34.avif`,
    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/35.avif`,
    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/36.avif`,
    // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/marca-registrada-feriexpo-coah-2026-x5LO4`,
  },
  {
    slug: "la-tropa-estrella",
    imagen: "/Cartelera/estrella.avif",
    nombre: "La Tropa Estrella",
    fecha: "20 Septiembre 2026",
    genero: "Cumbia / Tropical / Grupero",
    im: "/Artistas/estrella.avif",
    imMobile: "/Artistas/estrella.avif",
    hora: "10:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `La Tropa Estrella es una agrupación de música tropical y cumbia originaria de Piedras Negras, Coahuila, formada por integrantes de la familia Hernández. Su propuesta se caracteriza por un sonido completamente bailable, con una fuerte influencia de la cumbia y la música tropical, convirtiéndose en una agrupación reconocida dentro de la escena tropical del norte de México.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Pupurri Colombiano`,
    can2nom: `La segunda De La Prima`,
    can3nom: `Scooby Doo Papa`,
    can4nom: `Ea Ea la Cumbia Buena`,
    can5nom: `Cumbia Coqueta`,

    can1noml: `https://open.spotify.com/intl-es/track/42VmVLLF8xxMgh6JY0PZxL?si=bf6f7a1c4c354561`,
    can2noml: `https://open.spotify.com/intl-es/track/6sTCknu19kv0RPFtVQwvQa?si=ffae83b4f6714d14`,
    can3noml: `https://open.spotify.com/intl-es/track/0WzmVvqlxQW0Xxymw5v2Km?si=311ef4061ca94eef`,
    can4noml: `https://open.spotify.com/intl-es/track/4ph7gyoTRshJuHZ7L3tV5l?si=d43ad744248c4f98`,
    can5noml: `https://open.spotify.com/intl-es/track/4T7CwqwIyQ6StCubzHEjCV?si=e1e89f35fac2487f`,

    // imagenes
    url1: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/37.avif`,
    url2: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/38.avif`,
    url3: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/39.avif`,
    url4: `https://shlkezgxgkyfvoutoyax.supabase.co/storage/v1/object/public/Feria/40.avif`,
    // Boletos
    vip: false,
  },
];
